import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Event as RouterEvent, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { uniq } from 'lodash';
import { forkJoin } from 'rxjs';
import { environment } from '../environments/environment';

/*
 * App Component
 * Top Level Component
 */
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	encapsulation: ViewEncapsulation.None,

})
export class AppComponent implements OnInit {
	isDevMode: boolean = false;

	constructor(
		private router: Router,
	) {
		this.isDevMode = true;
	}

	ngOnInit() {
		// Resolve user and host env so the values are cached in appStateService

	}

}
