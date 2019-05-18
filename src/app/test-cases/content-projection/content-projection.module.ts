import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContentProjectionRoutingModule } from "./content-projection-routing.module";
import { PopupWindowComponent } from "./popup-window/popup-window.component";
import { ContentProjectionComponent } from "./content-projection.component";

@NgModule({
  declarations: [ContentProjectionComponent, PopupWindowComponent],
  imports: [CommonModule, ContentProjectionRoutingModule]
})
export class ContentProjectionModule {}
