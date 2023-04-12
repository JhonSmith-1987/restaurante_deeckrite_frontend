import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DtoTypeUser} from "../../../Dto/DtoTypeUser";
import {ApiService} from "../../../Services/api.service";
import {DtoResponseSave} from "../../../Dto/DtoResponseSave";
import {DtoResponseTypeUser, ResponseTypeUser} from "../../../Dto/DtoResponseTypeUser";

@Component({
  selector: 'app-type-user',
  templateUrl: './type-user.component.html',
  styleUrls: ['./type-user.component.css']
})
export class TypeUserComponent implements OnInit {

  formTypeUser: FormGroup;
  message: any;

  type_user_list:ResponseTypeUser[] = [];

  constructor(
    private fb:FormBuilder,
    private api:ApiService
  ) {
    this.formTypeUser = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getTypeUser();
  }

  getTypeUser() {
    this.api.getTypeUsers().then((res)=>{
      let data:DtoResponseTypeUser = res as DtoResponseTypeUser;
      this.type_user_list = data.data;
    }).catch((e)=>{
      console.log(e);
    })
  }

  createTypeUser() {
    if (this.formTypeUser.status === "INVALID") {
      alert('Llena todos los campos');
      return;
    }
    let type_user:DtoTypeUser = {
      "name": this.formTypeUser.value.name
    }
    this.api.postTypeUser(type_user).then((res)=>{
      let mjs:DtoResponseSave = res as DtoResponseSave;
      this.message = mjs.mjs;
      this.getTypeUser();
      this.formTypeUser.reset();
    }).catch((e)=>{
      console.log(e);
    })
  }

  deleteTypeUser(id: number) {
    this.api.deleteTypeUser(id).then((res)=>{
      let response:DtoResponseSave = res as DtoResponseSave;
      this.message = response.mjs;
      this.getTypeUser();
    }).catch((e)=>{
      console.log(e);
    })
  }

  editTypeUser(id: number) {

  }
}
