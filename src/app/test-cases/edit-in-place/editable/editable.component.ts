import {
  Component,
  OnInit,
  Output,
  ContentChild,
  EventEmitter,
  ElementRef
} from "@angular/core";
import { Subject, fromEvent } from "rxjs";
import { switchMapTo, take, filter } from "rxjs/operators";
import { untilDestroyed } from "ngx-take-until-destroy";
import { ViewModeDirective } from "src/app/test-cases/edit-in-place/directives/view-mode.directive";
import { EditModeDirective } from "src/app/test-cases/edit-in-place/directives/edit-mode.directive";

@Component({
  selector: "editable",
  templateUrl: "./editable.component.html",
  styleUrls: ["./editable.component.css"]
})
export class EditableComponent implements OnInit {
  @Output() update = new EventEmitter();
  @ContentChild(ViewModeDirective) viewModeTpl: ViewModeDirective;
  @ContentChild(EditModeDirective) editModeTpl: EditModeDirective;

  mode: "view" | "edit" = "view";

  editMode = new Subject();
  editMode$ = this.editMode.asObservable();

  constructor(private host: ElementRef) {}

  get currentView() {
    return this.mode === "view" ? this.viewModeTpl.tpl : this.editModeTpl.tpl;
  }

  ngOnInit() {
    this.viewModeHandler();
    this.editModeHandler();
  }

  private get element() {
    return this.host.nativeElement;
  }

  private viewModeHandler() {
    fromEvent(this.element, "dblclick")
      .pipe(untilDestroyed(this))
      .subscribe(() => {
        this.mode = "edit";
        this.editMode.next(true);
      });
  }

  private editModeHandler() {
    const clickOutside$ = fromEvent(document, "click").pipe(
      filter(({ target }) => this.element.contains(target) === false),
      take(1)
    );

    this.editMode$
      .pipe(
        switchMapTo(clickOutside$),
        untilDestroyed(this)
      )
      .subscribe(event => {
        this.update.next();
        this.mode = "view";
      });
  }

  toViewMode() {
    this.update.next();
    this.mode = "view";
  }

  ngOnDestroy(): void {}
}
