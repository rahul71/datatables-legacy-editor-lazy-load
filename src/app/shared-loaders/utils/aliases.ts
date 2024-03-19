export const DT_EXCEL = () => import('../modules/datatables-excel.module');
export const DT_EDITOR = () => import('../modules/datatables-editor.module');

export const CORE = [
	() => import('../modules/util-extensions.module')
];
export const CORE_UI = [
	...CORE,
	() => import('../modules/jquery-extensions.module')
];
export const CORE_UI_DT = [
	...CORE_UI,
	() => import('../modules/datatables.module')
];
export const CORE_UI_DT_EXT = [
	...CORE_UI_DT,
	DT_EXCEL,
	DT_EDITOR
];
