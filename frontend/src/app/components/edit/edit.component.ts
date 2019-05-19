import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Insurance, Pickpoint, Good, Order } from 'src/app/app.service';
import { Store } from '@ngrx/store';
import { RootStoreState } from 'src/app/app.module';
import { map, filter } from 'rxjs/operators';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { GoodsStateSelector } from 'src/app/reducers/goods';
import { PickpointsStateSelector } from 'src/app/reducers/pickpoints';
import { InsurancesStateSelector } from 'src/app/reducers/insurances';
import { selectOrdersState, OrdersEditInit } from 'src/app/reducers';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  pickpoints$: Observable<Pickpoint[]>;
  goods$: Observable<Good[]>;
  insurances$: Observable<Insurance[]>;

  orderForm: FormGroup;

  selected$: Observable<Order>;

  constructor(private store$: Store<RootStoreState>, private fb: FormBuilder) {
    this.reset();

    this.store$.select(selectOrdersState)
      .pipe(
        map(x => x.selected),
        filter(x => !isNullOrUndefined(x))
      ).subscribe(
        x => {
          this.orderForm = this.fb.group({
            id: x.orderId,
            insurancesIds: [x.insurances.map(x => x.id), Validators.required],
            deliveryDate: [x.deliveryDate, Validators.required],
            pickpointId: [x.pickpoint.id, Validators.required],
            count: [x.count, [Validators.required, Validators.min(1)]]
          });
        }
      )
  }

  reset() {
    this.orderForm = this.fb.group({
      insurancesIds: [null, Validators.required],
      deliveryDate: [null, Validators.required],
      pickpointId: [null, Validators.required],
      count: [null, [Validators.required, Validators.min(1)]]
    });
  }

  disabledDate(current: Date): boolean {
    return current < new Date();
  }

  ngOnInit() {
    this.pickpoints$ = this.store$.select(PickpointsStateSelector).pipe(map(x => x.pickpoints));
    this.goods$ = this.store$.select(GoodsStateSelector).pipe(map(x => x.goods));
    this.insurances$ = this.store$.select(InsurancesStateSelector).pipe(map(x => x.insurances));
  }

  submitForm(): void {
    for (const i in this.orderForm.controls) {
      this.orderForm.controls[i].markAsDirty();
      this.orderForm.controls[i].updateValueAndValidity();
    }

    if (this.orderForm.valid) {
      this.store$.dispatch(new OrdersEditInit(this.orderForm.value));

      this.reset();
    }
  }
}