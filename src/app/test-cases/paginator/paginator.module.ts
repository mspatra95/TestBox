import { PaginatorComponent } from "./paginator.component";
import { AngularPaginationComponent } from "./angular-pagination/angular-pagination.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PaginatorRoutingModule } from "./paginator-routing.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AngularPaginationComponent, PaginatorComponent],
  imports: [CommonModule, PaginatorRoutingModule, FormsModule]
})
export class PaginatorModule {}
