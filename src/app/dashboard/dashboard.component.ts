import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  testCases: any[] = [
    {
      path: "template-form",
      testCase: "template-form"
    },
    {
      path: "edit-in-place",
      testCase: "edit-in-place"
    },
    {
      path: "drag-drop-file-upload",
      testCase: "drag-drop-file-upload"
    },
    {
      path: "content-projection",
      testCase: "content-projection"
    },
    {
      path: "pagination",
      testCase: "pagination"
    },
    {
      path: "reactive-form",
      testCase: "reactive-form"
    },
    {
      path: "view-reactive-form",
      testCase: "view-reactive-form"
    },
    {
      path: "data-patch-rx-form",
      testCase: "data-patch-rx-form"
    },
    {
      path: "minesweeper-game",
      testCase: "minesweeper-game"
    }
  ]

}
