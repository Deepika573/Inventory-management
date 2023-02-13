import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "https://localhost:44340/api"; 
  constructor(private http:HttpClient) { }

  //For supplier API
  getSupList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl+ '/supplier');
  }
  addSupplier(val:any){
    return this.http.post(this.APIUrl+'/supplier', val);
  }
  updateSupplier(val:any){
    return this.http.put(this.APIUrl+'/supplier', val);
  }
  deleteSupplier(val:any){
    return this.http.delete(this.APIUrl+'/supplier/'+val);
  }

  //For customer API
  getCusList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl+ '/customer');
  }
  addCustomer(val:any){
    return this.http.post(this.APIUrl+'/customer', val);
  }
  updateCustomer(val:any){
    return this.http.put(this.APIUrl+'/customer', val);
  }
  deleteCustomer(val:any){
    return this.http.delete(this.APIUrl+'/customer/'+val);
  }

  //For inventory API
  getInvList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl+ '/inventory');
  }
  addInventory(val:any){
    return this.http.post(this.APIUrl+'/inventory', val);
  }
  updateInventory(val:any){
    return this.http.put(this.APIUrl+'/inventory', val);
  }
  deleteInventory(val:any){
    return this.http.delete(this.APIUrl+'/inventory/'+val);
  }

  //For orders API
  getOrdList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl+ '/orders');
  }
  addOrders(val:any){
    return this.http.post(this.APIUrl+'/orders', val);
  }
  deleteOrders(val:any){
    return this.http.delete(this.APIUrl+'/orders/'+val);
  }
  getAllInventoryNames(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+ '/Orders/GetAllInventoryNames')
  }
  getAllCustomerNames(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+ '/Orders/GetAllCustomerNames')
  }
  getAllInvNames(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+ '/Reorder/GetAllInventoryNames')
  }
  getAllSupplierNames(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+ '/Reorder/GetAllSupplierNames')
  }
  PutupdateInv(val:any){
    return this.http.put(this.APIUrl+'/Orders/PutupdateInv', val);
  }

   //For orders API
   getReList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl+ '/reorder');
  }
  addReorder(val:any){
    return this.http.post(this.APIUrl+'/reorder', val);
  }
  deleteReorder(val:any){
    return this.http.delete(this.APIUrl+'/reorder/'+val);
  }
  PutupdateIn(val:any){
    return this.http.put(this.APIUrl+'/Reorder/PutupdateIn', val);
  }
}
