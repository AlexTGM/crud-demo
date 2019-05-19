import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RootStoreState } from 'src/app/app.module';
import { selectOrdersState, OrdersLoadInit, OrdersState, OrdersSetFilter, OrdersSelect, OrdersDeleteInit } from 'src/app/reducers';
import { Order } from 'src/app/app.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  orderState$: Observable<OrdersState>;
  searchValue: string;
  
  constructor(private store$: Store<RootStoreState>) { }

  ngOnInit() {
    this.store$.dispatch(new OrdersLoadInit());

    this.orderState$ = this.store$.select(selectOrdersState);
  }

  reset(): void {
    this.searchValue = '';
    this.store$.dispatch(new OrdersSetFilter(''));
  }

  search(): void {
    this.store$.dispatch(new OrdersSetFilter(this.searchValue));
  }

  select(order: Order) {
    this.store$.dispatch(new OrdersSelect(order));
  }

  delete(order: Order) {
    this.store$.dispatch(new OrdersDeleteInit(order.orderId));
  }
}
