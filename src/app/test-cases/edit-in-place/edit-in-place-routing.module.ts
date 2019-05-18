import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EditInPlaceComponent } from "./edit-in-place.component";

const routes: Routes = [
  {
    path: "",
    component: EditInPlaceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditInPlaceRoutingModule {}
