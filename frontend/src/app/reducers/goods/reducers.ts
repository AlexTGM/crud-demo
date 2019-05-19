import { goodsInitialState, GoodsState } from './state';
import { GoodsActions, GoodsActionTypes } from './actions';

export function goodsReducer(state = goodsInitialState, action: GoodsActions): GoodsState {
    switch (action.type) {
        case GoodsActionTypes.GoodsLoadFinished: {
            return { ...state, goods: action.payload }
        }
        default: return state;
    }
}
