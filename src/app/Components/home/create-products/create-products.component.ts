import { Component, OnInit } from '@angular/core';
import {getDownloadURL, listAll, ref, Storage} from "@angular/fire/storage";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../Services/api.service";
import {ResponseTypeUser} from "../../../Dto/DtoResponseTypeUser";
import {DtoResponseClient} from "../../../Dto/DtoResponseClient";
import {DtoResponseCategory, ResponseCategory} from "../../../Dto/DtoResponseCategory";
import * as events from "events";
import {ApiStorageService} from "../../../Services/api-storage.service";
import {DtoImageStorage} from "../../../Dto/DtoImageStorage";
import {DtoProducts} from "../../../Dto/DtoProducts";
import {DtoResponseSave} from "../../../Dto/DtoResponseSave";

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent implements OnInit {

  file:any;
  file_name:string = '';
  messages: string = '';

  formCreateProduct:FormGroup;

  categories:ResponseCategory[] = [];
  clients:DtoResponseClient[] = [];
  img_storage:DtoImageStorage[] = [];

  constructor(
    private fb:FormBuilder,
    private api:ApiService,
    private storage:Storage,
    private api_storage:ApiStorageService
  ) {
    this.formCreateProduct = this.fb.group({
      name: ['', Validators.required],
      imgRef: ['', Validators.required],
      value: [ 0, Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      client_id: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.api.getClients().then((res)=>{
      // console.log(res);
      this.clients = res as DtoResponseClient[];
    }).catch((e)=>{
      console.log(e);
    })
    this.getCategory();
  }

  getCategory() {
    this.api.getCategory().then((res)=>{
      let response:DtoResponseCategory = res as DtoResponseCategory;
      this.categories = response.data;
    })
  }

  createProduct() {
    if (this.formCreateProduct.status === "INVALID") {
      alert('Llena todos los campos');
      return;
    }
    let img_storage:DtoImageStorage[] = [];
    const imgRef = ref(this.storage, 'products');
    listAll(imgRef).then(async res=>{
      for (let item of res.items) {
        let file:any = await getDownloadURL(item);
        let img:DtoImageStorage = {
          "name": item.name,
          "url": file
        }
        this.img_storage.push(img);
      }
      let data_filter:DtoImageStorage[] = this.img_storage.filter(data => data.name === this.file_name);
      let product:DtoProducts = {
        "name": this.formCreateProduct.value.name,
        "imgRef": data_filter[0].url,
        "value": this.formCreateProduct.value.value,
        "description": this.formCreateProduct.value.description,
        "category": this.formCreateProduct.value.category,
        "client_id": this.formCreateProduct.value.client_id,
      }
      this.api.postProduct(product).then((res)=>{
        let mjs:DtoResponseSave = res as DtoResponseSave;
        alert(mjs.mjs);
        this.formCreateProduct.reset();
      })
    }).catch((e)=>{
      console.log(e);
    })
  }

  handleImage($event: any) {
    this.file = $event.target.files[0];
    this.file_name = this.file.name;
    this.api_storage.addFileStorage(this.file_name, this.file);
  }
}
