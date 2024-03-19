import { RouterModule, Routes } from '@angular/router';
import { CORE_UI_DT, CORE_UI_DT_EXT, DT_EDITOR, preLoad } from './shared-loaders';
import { HomeComponent } from './home.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
	{
		path: '', component: AppComponent,
		children: [
			{ path: '', component: HomeComponent, pathMatch: 'full' },
			{
				path: 'datatable', loadChildren: () => import('./datatables-net-mod/datatables-net-test.module').then(m => preLoad(CORE_UI_DT_EXT)(m.DataTablesNetModule))
			},
			{
				path: 'datatable/edit', loadChildren: () => import('./datatables-net-mod/datatables-net-test.module').then(m => preLoad(CORE_UI_DT_EXT)(m.DataTablesNetModule))
			},
		]
	}
];

export const routing = RouterModule.forRoot(routes);
