import { Action } from '@ngrx/store';
import { Insurance } from 'src/app/app.service';

export enum InsurancesActionTypes {
    InsurancesLoadInit = '[Insurances] LoadInit',
    InsurancesLoadFinished = '[Insurances] LoadFinished',
}

export class InsurancesLoadInit implements Action {
    readonly type = InsurancesActionTypes.InsurancesLoadInit;
}

export class InsurancesLoadFinished implements Action {
    readonly type = InsurancesActionTypes.InsurancesLoadFinished;
    constructor(public payload: Insurance[]) { }
}

export type InsurancesActions = InsurancesLoadInit | InsurancesLoadFinished;
