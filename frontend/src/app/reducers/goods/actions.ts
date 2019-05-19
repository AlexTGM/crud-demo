import { Action } from '@ngrx/store';
import { Good } from 'src/app/app.service';

export enum GoodsActionTypes {
    GoodsLoadInit = '[Goods] LoadInit',
    GoodsLoadFinished = '[Goods] LoadFinished',
}

export class GoodsLoadInit implements Action {
    readonly type = GoodsActionTypes.GoodsLoadInit;
}

export class GoodsLoadFinished implements Action {
    readonly type = GoodsActionTypes.GoodsLoadFinished;
    constructor(public payload: Good[]) { }
}

export type GoodsActions = GoodsLoadInit | GoodsLoadFinished;
