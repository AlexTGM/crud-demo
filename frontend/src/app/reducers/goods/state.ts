import { Good } from 'src/app/app.service';
import { MemoizedSelector, createFeatureSelector } from '@ngrx/store';

export interface GoodsState {
    goods: Good[];
}

export const goodsInitialState: GoodsState = {
    goods: []
}

export const selectGoodsState: MemoizedSelector<object, GoodsState>
    = createFeatureSelector<GoodsState>('goods');