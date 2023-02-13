import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-del-re',
  templateUrl: './show-del-re.component.html',
  styleUrls: ['./show-del-re.component.css']
})
export class ShowDelReComponent implements OnInit {

  constructor(private service: SharedService) { }

  ReOrderList: any = [];

  ModalTitle: string | undefined;
  ActivateAddReOrdComp: boolean = false;
  re: any;


  ngOnInit(): void {
    this.refreshReOrdList();
  }

  addClick() {
    this.re = {
      ReOrderId: 0,
      InventoryId: "",
      InventoryName: "",
      QuantityOfReorder: "",
      SupplierName: ""
    };
    this.ModalTitle = "Add Re-Order";
    this.ActivateAddReOrdComp = true;
  }

  deleteClick(item: { ReOrderId: any; }) {
    if (confirm('Are you sure??')) {
      this.service.deleteReorder(item.ReOrderId).subscribe(data => {
        alert(data.toString());
        this.refreshReOrdList();
      })
    }
  }

  closeClick() {
    this.ActivateAddReOrdComp = false;
    this.refreshReOrdList();
  }

  refreshReOrdList() {
    this.service.getReList().subscribe(data => {
      this.ReOrderList = data;
    });
  }
}
