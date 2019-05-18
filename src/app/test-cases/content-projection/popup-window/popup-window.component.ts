import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-popup-window",
  templateUrl: "./popup-window.component.html",
  styleUrls: ["./popup-window.component.css"]
})
export class PopupWindowComponent {
  @Input()
  isOpen = false;

  @Input()
  title = "Default Title";

  @Output()
  onClose = new EventEmitter<string>();

  closePopup() {
    this.isOpen = false;
    this.onClose.emit("Pop-up window closed");
  }
}
