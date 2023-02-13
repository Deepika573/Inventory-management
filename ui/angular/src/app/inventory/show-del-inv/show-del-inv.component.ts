import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-del-inv',
  templateUrl: './show-del-inv.component.html',
  styleUrls: ['./show-del-inv.component.css']
})

export class ShowDelInvComponent implements OnInit {

  constructor(private service: SharedService) { }

  InventoryList: any = [];

  ModalTitle: string | undefined;
  ActivateAddEditInvComp: boolean = false;
  inv: any;

  InventoryIdFilter: string = "";
  InventoryNameFilter: string = "";
  StockQuantityFilter: string = "";
  InventoryListWithoutFilter: any = [];


  ngOnInit(): void {
    this.refreshInvList();
  }

  addClick() {
    this.inv = {
      InventoryId: 0,
      InventoryName: "",
      StockQuantity: ""
    };
    this.ModalTitle = "Add Inventory";
    this.ActivateAddEditInvComp = true;
  }

  editClick(item: any) {
    this.inv = item;
    this.ModalTitle = "Edit Inventory";
    this.ActivateAddEditInvComp = true;
  }

  deleteClick(item: { InventoryId: any; }) {
    if (confirm('Are you sure??')) {
      this.service.deleteInventory(item.InventoryId).subscribe(data => {
        alert(data.toString());
        this.refreshInvList();
      })
    }
  }

  closeClick() {
    this.ActivateAddEditInvComp = false;
    this.refreshInvList();
  }

  refreshInvList() {
    this.service.getInvList().subscribe(data => {
      this.InventoryList = data;
      this.InventoryListWithoutFilter = data;
    });
  }

  FilterFn() {
    var InventoryIdFilter = this.InventoryIdFilter;
    var InventoryNameFilter = this.InventoryNameFilter;
    var StockQuantityFilter = this.StockQuantityFilter;

    this.InventoryList = this.InventoryListWithoutFilter.filter(function (el: { InventoryId: { toString: () => string; }; InventoryName: { toString: () => string; }; StockQuantity: { toString: () => string; }; }) {
      return el.InventoryId.toString().toLowerCase().includes(
        InventoryIdFilter.toString().trim().toLowerCase()
      ) &&
        el.InventoryName.toString().toLowerCase().includes(
          InventoryNameFilter.toString().trim().toLowerCase()
        ) &&
        el.StockQuantity.toString().toLowerCase().includes(
          StockQuantityFilter.toString().trim().toLowerCase()
        )
    });
  }
  sortResult(prop, asc) {
    this.InventoryList = this.InventoryListWithoutFilter.sort(function (a, b) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    })
  }
}
