import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TemplateFormComponent } from "./test-cases/template-form/template-form.component";
import { DragDropFileUploadComponent } from "./test-cases/drag-drop-file-upload/drag-drop-file-upload.component";
import { DragDropDirective } from "./common/directives/drag-drop.directive";
import { ReactiveFormComponent } from "./test-cases/reactive-form/reactive-form.component";
import { ShowPasswordDirective } from "./common/directives/show-password.directive";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { ViewReactiveFormComponent } from './test-cases/view-reactive-form/view-reactive-form.component';
library.add(fas);

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    DragDropFileUploadComponent,
    DragDropDirective,
    ReactiveFormComponent,
    ShowPasswordDirective,
    ViewReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
