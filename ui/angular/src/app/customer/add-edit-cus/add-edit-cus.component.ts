import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-cus',
  templateUrl: './add-edit-cus.component.html',
  styleUrls: ['./add-edit-cus.component.css']
})
export class AddEditCusComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() cu: any;
  CustomerId: string | undefined;
  CustomerName: string | undefined;

  ngOnInit(): void {
    this.CustomerId = this.cu.CustomerId;
    this.CustomerName = this.cu.CustomerName;
  }

  addCustomer() {
    var val = {
      CustomerId: this.CustomerId,
      CustomerName: this.CustomerName
    };
    this.service.addCustomer(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateCustomer() {
    var val = {
      CustomerId: this.CustomerId,
      CustomerName: this.CustomerName
    };
    this.service.updateCustomer(val).subscribe(res => {
      alert(res.toString());
    });
  }
}

