import { pickpointsInitialState, PickpointsState } from './state';
import { PickpointsActions, PickpointsActionTypes } from './actions';

export function pickpointsReducer(state = pickpointsInitialState, action: PickpointsActions): PickpointsState {
    switch (action.type) {
        case PickpointsActionTypes.PickpointsLoadFinished: {
            return { ...state, pickpoints: action.payload }
        }
        default: return state;
    }
}
