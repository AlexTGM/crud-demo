import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootStoreState } from './app.module';
import { GoodsLoadInit } from './reducers/goods';
import { InsurancesLoadInit } from './reducers/insurances';
import { PickpointsLoadInit } from './reducers/pickpoints';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(store$: Store<RootStoreState>) { 
    store$.dispatch(new GoodsLoadInit());
    store$.dispatch(new InsurancesLoadInit());
    store$.dispatch(new PickpointsLoadInit());
  }
}
