import { CORE_UI } from './aliases';

// Load array in sequence for handling module dependencies.
// You can also pass Promise.all in an element to execute in parallel.
export function preLoad(imports: (() => Promise<any>)[] = CORE_UI) {
	return (module) => {
		return imports.reduce(
			(p, spec) => p.then(() => spec()),
			Promise.resolve(null)
		).then( () => {
			return module;
		});
	};
}

export function preLoadFunc(imports: (() => Promise<any>)[] = CORE_UI) {
	return (func) => {
		return imports.reduce(
			(p, spec) => p.then(() => spec()),
			Promise.resolve(null)
		).then( () => {
			return func();
		});
	};
}
