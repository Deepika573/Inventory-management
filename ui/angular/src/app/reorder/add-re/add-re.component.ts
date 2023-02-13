import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-re',
  templateUrl: './add-re.component.html',
  styleUrls: ['./add-re.component.css']
})
export class AddReComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() re: any;
  ReOrderId: string | undefined;
  InventoryName: string | undefined;
  QuantityOfReorder: string | undefined;
  SupplierName: string | undefined;
  InventoriesList: any = [];
  SuppliersList: any = [];

  ngOnInit(): void {
    this.loadInventoriesList();
    this.loadSuppliersList();

  }
  loadInventoriesList() {
    this.service.getAllInvNames().subscribe((data: any) => {
      this.InventoriesList = data;
      this.ReOrderId = this.re.ReOrderId;
      this.InventoryName = this.re.InventoryName;
      this.QuantityOfReorder = this.re.QuantityOfReorder;
      this.SupplierName = this.re.SupplierName;
    });
  }
  loadSuppliersList() {
    this.service.getAllSupplierNames().subscribe((data: any) => {
      this.SuppliersList = data;
    });
  }
  addOrders() {
    var val = {
      ReOrderId: this.ReOrderId,
      InventoryName: this.InventoryName,
      QuantityOfReorder: this.QuantityOfReorder,
      SupplierName: this.SupplierName
    };
    this.service.addReorder(val).subscribe(res => {
      alert(res.toString());
    });
    this.service.PutupdateIn(val).subscribe(res => {
      alert(res.toString());
    });
  }
}
