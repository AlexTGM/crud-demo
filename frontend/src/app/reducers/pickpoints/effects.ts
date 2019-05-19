import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PickpointService } from 'src/app/app.service';
import { Observable } from 'rxjs';
import { switchMapTo, map } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { PickpointsLoadInit, PickpointsActionTypes, PickpointsLoadFinished } from './actions';

@Injectable()
export class PickpointsEffects {
    constructor(private actions$: Actions, private service: PickpointService) { }

    @Effect()
    loadInitEffect$: Observable<Action> = this.actions$.pipe(
        ofType<PickpointsLoadInit>(
            PickpointsActionTypes.PickpointsLoadInit
        ),
        switchMapTo(this.service.getAll().pipe(
            map(data => {
                return new PickpointsLoadFinished(data)
            })
        ))
    );
}