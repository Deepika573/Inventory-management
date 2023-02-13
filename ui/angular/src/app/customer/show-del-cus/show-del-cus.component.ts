import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-del-cus',
  templateUrl: './show-del-cus.component.html',
  styleUrls: ['./show-del-cus.component.css']
})

export class ShowDelCusComponent implements OnInit {

  constructor(private service: SharedService) { }

  CustomerList: any = [];

  ModalTitle: string | undefined;
  ActivateAddEditCusComp: boolean = false;
  cu: any;


  ngOnInit(): void {
    this.refreshCusList();
  }

  addClick() {
    this.cu = {
      CustomerId: 0,
      CustomerName: ""
    };
    this.ModalTitle = "Add Customer";
    this.ActivateAddEditCusComp = true;
  }

  editClick(item: any) {
    this.cu = item;
    this.ModalTitle = "Edit customer";
    this.ActivateAddEditCusComp = true;
  }

  deleteClick(item: { CustomerId: any; }) {
    if (confirm('Are you sure??')) {
      this.service.deleteCustomer(item.CustomerId).subscribe(data => {
        alert(data.toString());
        this.refreshCusList();
      })
    }
  }

  closeClick() {
    this.ActivateAddEditCusComp = false;
    this.refreshCusList();
  }

  refreshCusList() {
    this.service.getCusList().subscribe(data => {
      this.CustomerList = data;
    });
  }
}