import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DtoResponseLoginUser} from "../../Dto/DtoResponseLoginUser";
import {ApiService} from "../../Services/api.service";
import {ResponseUser} from "../../Dto/DtoResponseUser";
import {ResponseProducts} from "../../Dto/DtoResponseProducts";
import {ResponseCategory} from "../../Dto/DtoResponseCategory";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  id:number = 0;

  categories:ResponseCategory[] = [];

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
    this.getCategoryForClient();
  }

  getUserForId() {
    this.api.getUserForId(this.id).then((res)=>{
      this.client_user = res as ResponseUser;
    }).catch((e)=>{
      console.log(e);
    })
  }

  getProductsForClient() {
    let client_id:number = this.route.snapshot.params['id'];
    this.api.getProductsForClient(client_id).then((res)=>{
      // console.log(res);
    }).catch((e)=>{
      console.log(e);
    })
  }

  getCategoryForClient(){
    let client_id:number = this.route.snapshot.params['id'];
    this.api.getCategoryForClient(client_id).then((res)=>{
      this.categories = res as ResponseCategory[];
    }).catch((e)=>{
      console.log(e);
    })
  }

}
