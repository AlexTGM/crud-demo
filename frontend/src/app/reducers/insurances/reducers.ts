import { insurancesInitialState, InsurancesState } from './state';
import { InsurancesActions, InsurancesActionTypes } from './actions';

export function insurancesReducer(state = insurancesInitialState, action: InsurancesActions): InsurancesState {
    switch (action.type) {
        case InsurancesActionTypes.InsurancesLoadFinished: {
            return { ...state, insurances: action.payload }
        }
        default: return state;
    }
}
