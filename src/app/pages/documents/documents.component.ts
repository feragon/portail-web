import {Component, OnInit} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import Reference = firebase.storage.Reference;

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  private folders: Array<Reference>;
  private files: Map<Reference, string>;

  constructor(private afs: AngularFireStorage) {

  }

  ngOnInit() {
    this.changeFolder('');
  }

  changeFolder(path) {
    this.folders = Array<Reference>();
    this.files = new Map<Reference, string>();

    this.afs.storage.ref(path).listAll().then(listResult => {
      for (const folderId in listResult.prefixes) {
        this.folders.push(listResult.prefixes[folderId]);
      }

      for (const itemId in listResult.items) {
        const file = listResult.items[itemId];

        file.getDownloadURL().then(value => {
          this.files.set(file, value);
        });
      }
    });
  }

}
