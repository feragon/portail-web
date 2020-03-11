import {Component, OnInit} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {faFolder} from '@fortawesome/free-solid-svg-icons';
import Reference = firebase.storage.Reference;

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  private folders: Array<Reference>;
  private files: Map<Reference, string>;
  private faFolder = faFolder;
  private path: Array<[string, string]>;

  constructor(private afs: AngularFireStorage) {
  }

  ngOnInit() {
    this.changeFolder('');
  }

  changeFolder(path) {
    this.path = [];
    const pathParts = path.split('/');
    let pathPrefix = '';

    for (const pathPart of pathParts) {
      this.path.push([pathPart, pathPrefix + pathPart]);
      pathPrefix += pathPart + '/';
    }

    this.folders = Array<Reference>();
    this.files = new Map<Reference, string>();

    this.afs.storage.ref(path).listAll().then(listResult => {
      for (const prefix of listResult.prefixes) {
        this.folders.push(prefix);
      }

      for (const item of listResult.items) {
        const file = item;

        file.getDownloadURL().then(value => {
          this.files.set(file, value);
        });
      }
    });
  }

}
