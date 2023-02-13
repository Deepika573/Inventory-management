import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-ord',
  templateUrl: './add-ord.component.html',
  styleUrls: ['./add-ord.component.css']
})
export class AddOrdComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() ord: any;
  OrderId: string | undefined;
  InventoryName: string | undefined;
  QuantityOfOrder: string | undefined;
  CustomerName: string | undefined;
  InventoriesList: any = [];
  CustomersList: any = [];

  ngOnInit(): void {
    this.loadInventoriesList();
    this.loadCustomersList();

  }
  loadInventoriesList() {
    this.service.getAllInventoryNames().subscribe((data: any) => {
      this.InventoriesList = data;
      this.OrderId = this.ord.OrderId;
      this.InventoryName = this.ord.InventoryName;
      this.QuantityOfOrder = this.ord.QuantityOfOrder;
      this.CustomerName = this.ord.CustomerName;
    });
  }
  loadCustomersList() {
    this.service.getAllCustomerNames().subscribe((data: any) => {
      this.CustomersList = data;
    });
  }
  addOrders() {
    var val = {
      OrderId: this.OrderId,
      InventoryName: this.InventoryName,
      QuantityOfOrder: this.QuantityOfOrder,
      CustomerName: this.CustomerName
    };
    this.service.addOrders(val).subscribe(res => {
      alert(res.toString());
    });
    this.service.PutupdateInv(val).subscribe(res => {
      alert(res.toString());
    });
  }
}