import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { OrdersService, PickpointService, GoodsService, InsurancesService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { ordersReducer, OrdersEffects, OrdersState } from './reducers';
import { PickpointsReducers, PickpointsEffects } from './reducers/pickpoints';
import { GoodsReducers, GoodsEffects } from './reducers/goods';
import { InsurancesReducers, InsurancesEffects } from './reducers/insurances';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { EditComponent } from './components/edit/edit.component';

@NgModule({
  imports: [
    StoreModule.forFeature('orders', ordersReducer),
    EffectsModule.forFeature([OrdersEffects])
  ],
  providers: [OrdersEffects]
})
export class OrdersStoreModule { }

@NgModule({
  imports: [
    StoreModule.forFeature('pickpoints', PickpointsReducers),
    EffectsModule.forFeature([PickpointsEffects])
  ],
  providers: [PickpointsEffects]
})
export class PickpointsStoreModule { }

@NgModule({
  imports: [
    StoreModule.forFeature('goods', GoodsReducers),
    EffectsModule.forFeature([GoodsEffects])
  ],
  providers: [GoodsEffects]
})
export class GoodsStoreModule { }

@NgModule({
  imports: [
    StoreModule.forFeature('insurances', InsurancesReducers),
    EffectsModule.forFeature([InsurancesEffects])
  ],
  providers: [InsurancesEffects]
})
export class InsurancesStoreModule { }

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  
    OrdersStoreModule,
    PickpointsStoreModule,
    GoodsStoreModule,
    InsurancesStoreModule
  ]
})
export class RootStoreModule { }

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    RootStoreModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgZorroAntdModule
  ],
  providers: [
    OrdersService,
    PickpointService,
    GoodsService,
    InsurancesService,
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export interface RootStoreState {
  orders: OrdersState;
}
