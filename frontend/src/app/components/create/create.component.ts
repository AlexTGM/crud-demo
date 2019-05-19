import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Insurance, Pickpoint, Good } from 'src/app/app.service';
import { Store } from '@ngrx/store';
import { RootStoreState } from 'src/app/app.module';
import { map } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GoodsStateSelector } from 'src/app/reducers/goods';
import { PickpointsStateSelector } from 'src/app/reducers/pickpoints';
import { InsurancesStateSelector } from 'src/app/reducers/insurances';
import { OrdersCreateInit } from 'src/app/reducers';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit {
  pickpoints$: Observable<Pickpoint[]>;
  goods$: Observable<Good[]>;
  insurances$: Observable<Insurance[]>;

  orderForm: FormGroup;

  constructor(private store$: Store<RootStoreState>, private fb: FormBuilder) {
    this.init();
  }

  init() {
    this.orderForm = this.fb.group({
      goodId: [null, Validators.required],
      insurancesIds: [null, Validators.required],
      deliveryDate: [null, Validators.required],
      pickpointId: [null, Validators.required],
      count: [null, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit() {
    this.pickpoints$ = this.store$.select(PickpointsStateSelector).pipe(map(x => x.pickpoints));
    this.goods$ = this.store$.select(GoodsStateSelector).pipe(map(x => x.goods));
    this.insurances$ = this.store$.select(InsurancesStateSelector).pipe(map(x => x.insurances));
  }

  disabledDate(current: Date): boolean {
    return current < new Date();
  }

  submitForm(): void {
    for (const i in this.orderForm.controls) {
      this.orderForm.controls[i].markAsDirty();
      this.orderForm.controls[i].updateValueAndValidity();
    }

    if (this.orderForm.valid) {
      this.store$.dispatch(new OrdersCreateInit(this.orderForm.value));
    }
  }
}