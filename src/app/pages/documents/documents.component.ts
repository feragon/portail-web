import {Component, OnInit} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import Reference = firebase.storage.Reference;
import { faFolder } from '@fortawesome/free-solid-svg-icons';

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

    for(const pathPartIndex in pathParts) {
      this.path.push([pathParts[pathPartIndex], pathPrefix + pathParts[pathPartIndex]]);
      pathPrefix += pathParts[pathPartIndex] + '/';
    }

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
