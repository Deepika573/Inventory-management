import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-del-ord',
  templateUrl: './show-del-ord.component.html',
  styleUrls: ['./show-del-ord.component.css']
})
export class ShowDelOrdComponent implements OnInit {

  constructor(private service: SharedService) { }

  OrderList: any = [];

  ModalTitle: string | undefined;
  ActivateAddOrdComp: boolean = false;
  ord: any;


  ngOnInit(): void {
    this.refreshOrdList();
  }

  addClick() {
    this.ord = {
      OrderId: 0,
      InventoryName: "",
      QuantityOfOrder: "",
      CustomerName: ""
    };
    this.ModalTitle = "Add Re-Order";
    this.ActivateAddOrdComp = true;
  }

  deleteClick(item: { OrderId: any; }) {
    if (confirm('Are you sure??')) {
      this.service.deleteOrders(item.OrderId).subscribe(data => {
        alert(data.toString());
        this.refreshOrdList();
      })
    }
  }

  closeClick() {
    this.ActivateAddOrdComp = false;
    this.refreshOrdList();
  }

  refreshOrdList() {
    this.service.getOrdList().subscribe(data => {
      this.OrderList = data;
    });
  }
} 