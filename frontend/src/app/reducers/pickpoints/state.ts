import { Pickpoint } from 'src/app/app.service';
import { MemoizedSelector, createFeatureSelector } from '@ngrx/store';

export interface PickpointsState {
    pickpoints: Pickpoint[];
}

export const pickpointsInitialState: PickpointsState = {
    pickpoints: []
}

export const selectPickpointsState: MemoizedSelector<object, PickpointsState>
    = createFeatureSelector<PickpointsState>('pickpoints');