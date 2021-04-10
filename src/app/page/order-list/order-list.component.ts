import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orderList: BehaviorSubject<Order[]> = this.orderService.list$;
  orderListSum$: Observable<Order[]> = this.orderService.getAllsum();
  columnKey: string = '';
  phrase: string = '';
  filterKey: string = '';
  filterKeys: string[] = Object.keys(new Order());
  direction: boolean = false;
  summa: any;
  piece: any;
  update: boolean = false;

  constructor(
    private orderService: OrderService,
    private router: Router,
    
  ) { }

  ngOnInit(): void {
  }

}
