import { Directive, HostListener } from "@angular/core";
import { EditableComponent } from "src/app/test-cases/edit-in-place/editable/editable.component";

@Directive({
  selector: "[editableOnEnter]"
})
export class EditableOnEnterDirective {
  constructor(private editable: EditableComponent) {}

  @HostListener("keyup.enter")
  onEnter() {
    this.editable.toViewMode();
  }
}
