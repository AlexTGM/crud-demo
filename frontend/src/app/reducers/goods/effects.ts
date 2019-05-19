import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { GoodsService } from 'src/app/app.service';
import { Observable } from 'rxjs';
import { switchMapTo, map } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { GoodsLoadInit, GoodsActionTypes, GoodsLoadFinished } from './actions';

@Injectable()
export class GoodsEffects {
    constructor(private actions$: Actions, private service: GoodsService) { }

    @Effect()
    loadInitEffect$: Observable<Action> = this.actions$.pipe(
        ofType<GoodsLoadInit>(
            GoodsActionTypes.GoodsLoadInit
        ),
        switchMapTo(this.service.getAll().pipe(
            map(data => {
                return new GoodsLoadFinished(data)
            })
        ))
    );
}