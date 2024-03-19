// Module imports
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
// shared imports
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { HomeComponent } from './home.component';
// load feature modules
// shared service imports




@NgModule({
	// Important: When adding imports please preserve order of imports (from left to right then top to bottom)
	imports:
		[
			// @angular modules
			FormsModule,
			BrowserAnimationsModule,  // includes BrowserModule
			HttpClientModule,
			ReactiveFormsModule,
			RouterModule,
			// Bootstrapping imports
			routing,
			// feature module imports
		],
	exports: [
	],
	declarations:
		[
			AppComponent,
			HomeComponent
		],
	providers: [
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
