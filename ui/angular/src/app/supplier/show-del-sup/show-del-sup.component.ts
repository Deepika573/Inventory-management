import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-del-sup',
  templateUrl: './show-del-sup.component.html',
  styleUrls: ['./show-del-sup.component.css']
})
export class ShowDelSupComponent implements OnInit {

  constructor(private service: SharedService) { }

  SupplierList: any = [];

  ModalTitle: string | undefined;
  ActivateAddEditSupComp: boolean = false;
  sup: any;


  ngOnInit(): void {
    this.refreshSupList();
  }

  addClick() {
    this.sup = {
      SupplierId: 0,
      SupplierName: ""
    };
    this.ModalTitle = "Add Supplier";
    this.ActivateAddEditSupComp = true;
  }

  editClick(item: any) {
    this.sup = item;
    this.ModalTitle = "Edit supplier";
    this.ActivateAddEditSupComp = true;
  }

  deleteClick(item: { SupplierId: any; }) {
    if (confirm('Are you sure??')) {
      this.service.deleteSupplier(item.SupplierId).subscribe(data => {
        alert(data.toString());
        this.refreshSupList();
      })
    }
  }
  closeClick() {
    this.ActivateAddEditSupComp = false;
    this.refreshSupList();
  }

  refreshSupList() {
    this.service.getSupList().subscribe(data => {
      this.SupplierList = data;
    });
  }
}
