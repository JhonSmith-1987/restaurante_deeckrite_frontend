import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DtoCategories} from "../../../Dto/DtoCategories";
import {ApiService} from "../../../Services/api.service";
import {DtoResponseSave} from "../../../Dto/DtoResponseSave";
import {DtoResponseCategory, ResponseCategory} from "../../../Dto/DtoResponseCategory";
import {ResponseUser} from "../../../Dto/DtoResponseUser";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  message: string = '';

  formCategory:FormGroup;

  categories:ResponseCategory[] = [];
  clients:ResponseUser[] = [];

  constructor(
    private fb:FormBuilder,
    private api:ApiService
  ) {
    this.formCategory = this.fb.group({
      name: ['', Validators.required],
      client_id: [0, Validators.required]
    });
  }

  ngOnInit(): void {
    this.getCategory();
    this.getClient();
  }

  getClient() {
    this.api.getClients().then((res)=>{
      this.clients = res as ResponseUser[];
    }).catch((e)=>{
      console.log(e);
    })
  }

  getCategory() {
    this.api.getCategory().then((res)=>{
      let response:DtoResponseCategory = res as DtoResponseCategory;
      this.categories = response.data;
    })
  }

  createCategory() {
    let category:DtoCategories = {
      "name": this.formCategory.value.name,
      "client_id": this.formCategory.value.client_id
    }
    this.api.postCategory(category).then((res)=>{
      let response:DtoResponseSave = res as DtoResponseSave;
      this.getCategory();
      alert(response.mjs);
      this.formCategory.reset();
    }).catch((e)=>{
      console.log(e);
    })
  }

  deleteCategory() {

  }
}
