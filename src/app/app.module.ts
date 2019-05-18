import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TemplateFormComponent } from "./test-cases/template-form/template-form.component";
import { DragDropFileUploadComponent } from "./test-cases/drag-drop-file-upload/drag-drop-file-upload.component";
import { DragDropDirective } from "./common/directives/drag-drop.directive";
@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    DragDropFileUploadComponent,
    DragDropDirective
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
