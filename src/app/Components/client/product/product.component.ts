import { Component, OnInit } from '@angular/core';
import {ResponseUser} from "../../../Dto/DtoResponseUser";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../../Services/api.service";
import {ResponseProducts} from "../../../Dto/DtoResponseProducts";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id:number = 0;

  client_user:ResponseUser = {
    "id": 0,
    "name": '',
    "name_restaurant": '',
    "address": '',
    "phone": '',
    "type_user": '',
    "email": '',
    "password": '',
  };
  products:ResponseProducts = {
    "id": 0,
    "name": '',
    "imgRef": '',
    "description": '',
    "value": 0,
    "client_id": 0,
    "category": ''
  }

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private api:ApiService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['client_id'];
    this.getUserForId();
    this.getProductsForId();
  }

  getUserForId() {
    this.api.getUserForId(this.id).then((res)=>{
      this.client_user = res as ResponseUser;
    }).catch((e)=>{
      console.log(e);
    })
  }

  getProductsForId(){
    let id = this.route.snapshot.params['id'];
    this.api.getProductsForId(id).then((res)=>{
      let response:ResponseProducts = res as ResponseProducts;
      this.products = response;
    }).catch((e)=>{
      console.log(e);
    })
  }

}
