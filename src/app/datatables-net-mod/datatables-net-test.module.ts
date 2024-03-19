import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DATATABLE_ROUTES } from './datatables-net-test.routes';
import { DataTableViewComponent } from './data-table-view.component';
import { DataTableEditComponent } from './data-table-edit.component';
import { PreloadGuard } from '../shared-loaders/guards/preload.guard';


@NgModule({
	imports: [
		RouterModule.forChild(DATATABLE_ROUTES),
		CommonModule,
		FormsModule,
	],
	exports: [
		DataTableViewComponent,
		DataTableEditComponent
	],
	declarations: [
		DataTableViewComponent,
		DataTableEditComponent
	],
	providers: [
		PreloadGuard
	]
})
export class DataTablesNetModule {
}
