import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-multi-files',
  templateUrl: './upload-multi-files.component.html',
  styleUrls: ['./upload-multi-files.component.scss']
})
export class UploadMultiFilesComponent implements OnInit {

  constructor() { }
  filesData:Array<string> = [];
  ngOnInit(): void {
  }
  fileUploadHandler(event:any){
    this.filesData = [];

    // Iterate through the selected files and push their names into the array
    for (let i = 0; i < event.target.files.length; i++) {
      const fileName = event.target.files[i].name;
      this.filesData.push(fileName);
    }
  }
}
