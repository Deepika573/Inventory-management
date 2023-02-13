import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-inv',
  templateUrl: './add-edit-inv.component.html',
  styleUrls: ['./add-edit-inv.component.css']
})
export class AddEditInvComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() inv: any;
  InventoryId: string | undefined;
  InventoryName: string | undefined;
  StockQuantity: string | undefined;

  ngOnInit(): void {
    this.InventoryId = this.inv.InventoryId;
    this.InventoryName = this.inv.InventoryName;
    this.StockQuantity = this.inv.StockQuantity;
  }

  addInventory() {
    var val = {
      InventoryId: this.InventoryId,
      InventoryName: this.InventoryName,
      StockQuantity: this.StockQuantity
    };
    this.service.addInventory(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateInventory() {
    var val = {
      InventoryId: this.InventoryId,
      InventoryName: this.InventoryName
    };
    this.service.updateInventory(val).subscribe(res => {
      alert(res.toString());
    });
  }
}
