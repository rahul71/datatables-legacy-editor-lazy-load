// This file is required by karma.conf.js and loads recursively all the .spec and framework files
import 'jquery/dist/jquery.js';
// import 'datatables.net/js/jquery.dataTables.js';
import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';


// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
	BrowserDynamicTestingModule,
	platformBrowserDynamicTesting(), {
	    teardown: { destroyAfterEach: true }
	}
);

// Workaround for loading DT Editor, because normal imports do not work with Karma and this extension
jQuery.fn['dataTable']['Editor'] = require('datatables.net-editor-bs4');
