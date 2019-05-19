import { Action } from '@ngrx/store';
import { Pickpoint } from 'src/app/app.service';

export enum PickpointsActionTypes {
    PickpointsLoadInit = '[Pickpoints] LoadInit',
    PickpointsLoadFinished = '[Pickpoints] LoadFinished',
}

export class PickpointsLoadInit implements Action {
    readonly type = PickpointsActionTypes.PickpointsLoadInit;
}

export class PickpointsLoadFinished implements Action {
    readonly type = PickpointsActionTypes.PickpointsLoadFinished;
    constructor(public payload: Pickpoint[]) { }
}

export type PickpointsActions = PickpointsLoadInit | PickpointsLoadFinished;
