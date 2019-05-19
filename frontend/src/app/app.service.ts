import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface CreateOrderRequest {
    goodId: string;
    insurancesIds: string[];
    pickpointId: string;
    deliveryDate: Date;
    count: number;
}

export interface UpdateOrderRequest {
    id: string;
    insurancesIds: string[];
    pickpointId: string;
    deliveryDate: Date;
    count: number;
}

export interface Good {
    id: string;
    name: string;
    description: string;
    inStock: number;
}

export interface Insurance {
    id: string;
    type: string;
}

export interface Order {
    orderId: string;
    good: Good;
    insurances: Insurance[];
    pickpoint: Pickpoint;
    deliveryDate: Date;
    count: number;
}

export interface Pickpoint {
    id: string;
    name: string;
    address: string;
    description: string;
}

@Injectable()
export class OrdersService {
    constructor(private httpClient: HttpClient) { }

    getAll(): Observable<Order[]> {
        return this.httpClient.get<Order[]>(`http://localhost:5000/api/orders`);
    }

    get(id: string): Observable<Order> {
        return this.httpClient.get<Order>("http://localhost:5000/api/orders");
    }

    delete(id: string) {
        return this.httpClient.delete(`http://localhost:5000/api/orders/${id}`);
    }

    edit(input: UpdateOrderRequest): Observable<Order> {
        return this.httpClient.put<Order>(`http://localhost:5000/api/orders/${input.id}`, input);
    }

    create(input: CreateOrderRequest): Observable<Order> {
        return this.httpClient.post<Order>("http://localhost:5000/api/orders", input);
    }
}

@Injectable()
export class GoodsService {
    constructor(private httpClient: HttpClient) { }

    getAll(): Observable<Good[]> {
        return this.httpClient.get<Good[]>("http://localhost:5000/api/goods");
    }
}

@Injectable()
export class PickpointService {
    constructor(private httpClient: HttpClient) { }

    getAll(): Observable<Pickpoint[]> {
        return this.httpClient.get<Pickpoint[]>("http://localhost:5000/api/pickpoints");
    }
}

@Injectable()
export class InsurancesService {
    constructor(private httpClient: HttpClient) { }

    getAll(): Observable<Insurance[]> {
        return this.httpClient.get<Insurance[]>("http://localhost:5000/api/insurances");
    }
}
