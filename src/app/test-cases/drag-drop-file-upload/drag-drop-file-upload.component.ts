import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-drag-drop-file-upload",
  templateUrl: "./drag-drop-file-upload.component.html",
  styleUrls: ["./drag-drop-file-upload.component.css"]
})
export class DragDropFileUploadComponent {
  files: any = [];

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name);
    }
  }
  deleteAttachment(index) {
    this.files.splice(index, 1);
  }
}
