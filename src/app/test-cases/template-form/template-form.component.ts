import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
@Component({
  selector: "app-template-form",
  templateUrl: "./template-form.component.html",
  styleUrls: ["./template-form.component.css"]
})
export class TemplateFormComponent {
  subscriptions = ["Basic", "Advanced", "Pro"];
  selectedSubscription = "Advanced";
  @ViewChild("signupForm") sgForm: NgForm;
  onSubmit() {
    console.log(this.sgForm.value);
  }
}
