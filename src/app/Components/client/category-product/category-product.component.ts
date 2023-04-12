import { Component, OnInit } from '@angular/core';
import {ResponseUser} from "../../../Dto/DtoResponseUser";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../../Services/api.service";
import {ResponseProducts} from "../../../Dto/DtoResponseProducts";

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css']
})
export class CategoryProductComponent implements OnInit {

  id:number = 0;

  products:ResponseProducts[] = [];

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

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private api:ApiService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getUserForId();
    this.getProductsForClientAndCategory();
  }

  getUserForId() {
    this.api.getUserForId(this.id).then((res)=>{
      this.client_user = res as ResponseUser;
    }).catch((e)=>{
      console.log(e);
    })
  }

  getProductsForClientAndCategory() {
    let client_id = this.route.snapshot.params['id'];
    let category = this.route.snapshot.params['category'];
    this.api.getProductsForClientAndCategory(client_id, category).then((res)=>{
      this.products = res as ResponseProducts[];
    }).catch((e)=>{
      console.log(e);
    })
  }

}
