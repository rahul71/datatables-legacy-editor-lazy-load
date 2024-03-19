import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { preLoad } from '../utils/helper';

@Injectable()
export class PreloadGuard implements CanActivate {

	constructor(private router: Router) {
	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
		const libs = route.data['libs'] || [] as (() => Promise<any>)[];
		return preLoad(libs)(true);
	}
}
