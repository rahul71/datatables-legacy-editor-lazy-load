import { Component, OnInit } from '@angular/core';

@Component({
	templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
	editor: any;
	isEditorEnabled = false;
	test: any;
	title = 'Angular15App';

	constructor() {
		// empty on purpose
	}
	ngOnInit(): void {

	}


}
