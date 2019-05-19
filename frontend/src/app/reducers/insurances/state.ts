import { Insurance } from 'src/app/app.service';
import { MemoizedSelector, createFeatureSelector } from '@ngrx/store';

export interface InsurancesState {
    insurances: Insurance[];
}

export const insurancesInitialState: InsurancesState = {
    insurances: []
}

export const selectInsurancesState: MemoizedSelector<object, InsurancesState>
    = createFeatureSelector<InsurancesState>('insurances');