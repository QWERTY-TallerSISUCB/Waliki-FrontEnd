import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/common/order';
import { ActivatedRoute } from '@angular/router';
import { timeoutWith } from 'rxjs/operators';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  products: Order[] = [];

  constructor(private orderService: OrderService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listOrders();
    });
  }

  listOrders() {
      this.handleListOrders();
  }

  handleListOrders() {
    // now get the products for the given category id
    this.orderService.getProductListPaginate(this.thePageNumber - 1,
                                               this.thePageSize,
                                               this.currentCategoryId)
                                               .subscribe(this.processResult());
  }
}
