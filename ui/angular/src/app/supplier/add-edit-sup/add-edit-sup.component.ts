import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-sup',
  templateUrl: './add-edit-sup.component.html',
  styleUrls: ['./add-edit-sup.component.css']
})
export class AddEditSupComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() sup: any;
  SupplierId: string | undefined;
  SupplierName: string | undefined;

  ngOnInit(): void {
    this.SupplierId = this.sup.SupplierId;
    this.SupplierName = this.sup.SupplierName;
  }

  addSupplier() {
    var val = {
      SupplierId: this.SupplierId,
      SupplierName: this.SupplierName
    };
    this.service.addSupplier(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateSupplier() {
    var val = {
      SupplierId: this.SupplierId,
      SupplierName: this.SupplierName
    };
    this.service.updateSupplier(val).subscribe(res => {
      alert(res.toString());
    });
  }

  deleteSupplier() {
    var val = {
      SupplierId: this.SupplierId,
      SupplierName: this.SupplierName
    };
    this.service.deleteSupplier(val).subscribe(res => {
      alert(res.toString());
    });
  }
}
