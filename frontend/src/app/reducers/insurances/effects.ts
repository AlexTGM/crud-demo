import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { InsurancesService } from 'src/app/app.service';
import { Observable } from 'rxjs';
import { switchMapTo, map } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { InsurancesLoadInit, InsurancesActionTypes, InsurancesLoadFinished } from './actions';

@Injectable()
export class InsurancesEffects {
    constructor(private actions$: Actions, private service: InsurancesService) { }

    @Effect()
    loadInitEffect$: Observable<Action> = this.actions$.pipe(
        ofType<InsurancesLoadInit>(
            InsurancesActionTypes.InsurancesLoadInit
        ),
        switchMapTo(this.service.getAll().pipe(
            map(data => {
                return new InsurancesLoadFinished(data)
            })
        ))
    );
}