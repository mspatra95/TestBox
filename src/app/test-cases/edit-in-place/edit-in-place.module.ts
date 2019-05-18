import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EditInPlaceRoutingModule } from "./edit-in-place-routing.module";
import { EditableComponent } from "./editable/editable.component";
import { EditInPlaceComponent } from "./edit-in-place.component";

import { ReactiveFormsModule } from "@angular/forms";
import { ViewModeDirective } from "./directives/view-mode.directive";
import { EditModeDirective } from "./directives/edit-mode.directive";
import { EditableOnEnterDirective } from "./directives/editable-on-enter.directive";

@NgModule({
  declarations: [
    EditInPlaceComponent,
    EditableComponent,
    ViewModeDirective,
    EditModeDirective,
    EditableOnEnterDirective
  ],
  imports: [CommonModule, EditInPlaceRoutingModule, ReactiveFormsModule]
})
export class EditInPlaceModule {}
