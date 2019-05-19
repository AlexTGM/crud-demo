import {
  Action,
  MemoizedSelector,
  createFeatureSelector
} from '@ngrx/store';
import { OrdersService, Order, CreateOrderRequest, UpdateOrderRequest } from '../app.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap, mapTo, switchMapTo } from 'rxjs/operators';

import { Effect, ofType, Actions } from '@ngrx/effects';

export enum OrdersActionTypes {
  OrdersLoadInit = '[Orders] LoadInit',
  OrdersLoadFinished = '[Orders] LoadFinished',
  OrdersCreateInit = '[Orders] CreateInit',
  OrdersEditInit = '[Orders] EditInit',
  OrdersDeleteInit = '[Orders] DeleteInit',
  OrdersSetFilter = '[Orders] SetFilter',
  OrdersSelect = '[Orders] OrdersSelect',
}

export class OrdersLoadInit implements Action {
  readonly type = OrdersActionTypes.OrdersLoadInit;
}

export class OrdersLoadFinished implements Action {
  readonly type = OrdersActionTypes.OrdersLoadFinished;
  constructor(public payload: Order[]) { }
}

export class OrdersDeleteInit implements Action {
  readonly type = OrdersActionTypes.OrdersDeleteInit;
  constructor(public id: string) { }
}

export class OrdersCreateInit implements Action {
  readonly type = OrdersActionTypes.OrdersCreateInit;
  constructor(public payload: CreateOrderRequest) { }
}

export class OrdersEditInit implements Action {
  readonly type = OrdersActionTypes.OrdersEditInit;
  constructor(public payload: UpdateOrderRequest) { }
}

export class OrdersSetFilter implements Action {
  readonly type = OrdersActionTypes.OrdersSetFilter;
  constructor(public payload: string) { }
}

export class OrdersSelect implements Action {
  readonly type = OrdersActionTypes.OrdersSelect;
  constructor(public payload: Order) { }
}

export type OrdersActions = OrdersLoadInit | OrdersLoadFinished
  | OrdersDeleteInit | OrdersCreateInit | OrdersEditInit
  | OrdersSetFilter | OrdersSelect;

export interface OrdersState {
  rawData: Order[];
  orders: Order[];
  selected: Order;

  loading: boolean;
  loaded: boolean;
  filter: string;
}

export const ordersInitialState: OrdersState = {
  rawData: [],
  orders: [],
  selected: null,

  loading: false,
  loaded: false,
  filter: null
}

export function ordersReducer(state = ordersInitialState, action: OrdersActions): OrdersState {
  switch (action.type) {
    case OrdersActionTypes.OrdersLoadInit: {
      return { ...ordersInitialState, loading: true }
    }
    case OrdersActionTypes.OrdersLoadFinished: {
      return { ...state, rawData: action.payload, orders: action.payload, loading: false, loaded: true }
    }
    case OrdersActionTypes.OrdersSetFilter: {
      return { ...state, orders: state.rawData.filter(x => x.good.name.includes(action.payload)) }
    }
    case OrdersActionTypes.OrdersSelect: {
      return { ...state, selected: action.payload }
    }
    default: return state;
  }
}

@Injectable()
export class OrdersEffects {
  constructor(private actions$: Actions, private service: OrdersService) { }

  @Effect()
  loadInitEffect$: Observable<Action> = this.actions$.pipe(
    ofType<OrdersLoadInit>(
      OrdersActionTypes.OrdersLoadInit
    ),
    switchMapTo(this.service.getAll().pipe(
      map(orders => {
        return new OrdersLoadFinished(orders)
      })
    ))
  );

  @Effect()
  deleteInitEffect$: Observable<Action> = this.actions$.pipe(
    ofType<OrdersDeleteInit>(
      OrdersActionTypes.OrdersDeleteInit
    ),
    switchMap(action => this.service.delete(action.id).pipe(
      mapTo(new OrdersLoadInit())
    ))
  );

  @Effect()
  createInitEffect$: Observable<Action> = this.actions$.pipe(
    ofType<OrdersCreateInit>(
      OrdersActionTypes.OrdersCreateInit
    ),
    switchMap(action => this.service.create(action.payload).pipe(
      mapTo(new OrdersLoadInit())
    ))
  );

  @Effect()
  editInitEffect$: Observable<Action> = this.actions$.pipe(
    ofType<OrdersEditInit>(
      OrdersActionTypes.OrdersEditInit
    ),
    switchMap(action => this.service.edit(action.payload).pipe(
      mapTo(new OrdersLoadInit())
    ))
  );
}

export const selectOrdersState: MemoizedSelector<object, OrdersState>
  = createFeatureSelector<OrdersState>('orders');
