import { Routes } from '@angular/router';
import { DataTableViewComponent } from './data-table-view.component';
import { DataTableEditComponent } from './data-table-edit.component';
import { DT_EDITOR, PreloadGuard } from '../shared-loaders';

export const DATATABLE_ROUTES: Routes = [
	{ path: '', component: DataTableViewComponent },
	{
		path: 'edit', component: DataTableEditComponent,
		canActivate: [PreloadGuard],
		data: {
			libs: [DT_EDITOR]
		}
	}
];
