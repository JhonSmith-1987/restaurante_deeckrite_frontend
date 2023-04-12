import { Component, OnInit } from '@angular/core';
import {DtoResponseProducts, ResponseProducts} from "../../../Dto/DtoResponseProducts";
import {ApiService} from "../../../Services/api.service";
import {DtoResponseSave} from "../../../Dto/DtoResponseSave";

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {

  products:ResponseProducts[] = [];

  constructor(
    private api:ApiService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.api.getProducts().then((res)=>{
      let response:DtoResponseProducts = res as DtoResponseProducts;
      this.products = response.data;
    }).catch((e)=>{
      console.log(e);
    })
  }

  deleteProduct(id:number) {
    this.api.deleteProduct(id).then((res)=>{
      let mjs:DtoResponseSave = res as DtoResponseSave;
      alert(mjs.mjs);
    }).catch((e)=>{
      console.log(e);
    })
  }
}
