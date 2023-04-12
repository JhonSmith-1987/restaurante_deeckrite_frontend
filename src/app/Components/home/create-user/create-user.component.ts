import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DtoResponseTypeUser, ResponseTypeUser} from "../../../Dto/DtoResponseTypeUser";
import {ApiService} from "../../../Services/api.service";
import {DtoUser} from "../../../Dto/DtoUser";
import {DtoResponseSave} from "../../../Dto/DtoResponseSave";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  messages:any;

  formCreateUser:FormGroup;

  type_user_list:ResponseTypeUser[] = [];

  constructor(
    private fb:FormBuilder,
    private api:ApiService
  ) {
    this.formCreateUser = this.fb.group({
      name: ['', Validators.required],
      name_restaurant: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      type_user: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getTypeUser();
  }

  createUser() {
    if (this.formCreateUser.status === "INVALID") {
      alert("llena todos los campos")
      return;
    }
    let user:DtoUser = {
      "name": this.formCreateUser.value.name,
      "name_restaurant": this.formCreateUser.value.name_restaurant,
      "address": this.formCreateUser.value.address,
      "phone": this.formCreateUser.value.phone,
      "email": this.formCreateUser.value.email,
      "password": this.formCreateUser.value.password,
      "type_user": this.formCreateUser.value.type_user
    }
    this.api.postUser(user).then((res)=>{
      let response:DtoResponseSave = res as DtoResponseSave;
      this.messages = response.mjs;
      this.formCreateUser.reset();
    })
  }

  getTypeUser() {
    this.api.getTypeUsers().then((res)=>{
      let data:DtoResponseTypeUser = res as DtoResponseTypeUser;
      this.type_user_list = data.data;
    }).catch((e)=>{
      console.log(e);
    })
  }
}
