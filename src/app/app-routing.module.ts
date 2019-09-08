import { MinesweeperGameComponent } from './test-cases/minesweeper-game/minesweeper-game.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataPatchRxFormComponent } from "./test-cases/data-patch-rx-form/data-patch-rx-form.component";
import { ViewReactiveFormComponent } from "./test-cases/view-reactive-form/view-reactive-form.component";
import { TemplateFormComponent } from "./test-cases/template-form/template-form.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DragDropFileUploadComponent } from "./test-cases/drag-drop-file-upload/drag-drop-file-upload.component";
import { ReactiveFormComponent } from "./test-cases/reactive-form/reactive-form.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: DashboardComponent
  },
  {
    path: "template-form",
    component: TemplateFormComponent
  },
  {
    path: "edit-in-place",
    loadChildren:
      "./test-cases/edit-in-place/edit-in-place.module#EditInPlaceModule"
  },
  {
    path: "drag-drop-file-upload",
    component: DragDropFileUploadComponent
  },
  {
    path: "content-projection",
    loadChildren:
      "./test-cases/content-projection/content-projection.module#ContentProjectionModule"
  },
  {
    path: "pagination",
    loadChildren: "./test-cases/paginator/paginator.module#PaginatorModule"
  },
  {
    path: "reactive-form",
    component: ReactiveFormComponent
  },
  {
    path: "view-reactive-form",
    component: ViewReactiveFormComponent
  },
  {
    path: "data-patch-rx-form",
    component: DataPatchRxFormComponent
  },
  {
    path: "minesweeper-game",
    component: MinesweeperGameComponent
  },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
