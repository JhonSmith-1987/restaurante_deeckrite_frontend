import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DtoResponseTypeUser, ResponseTypeUser} from "../../../../Dto/DtoResponseTypeUser";
import {ApiService} from "../../../../Services/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ResponseUser} from "../../../../Dto/DtoResponseUser";
import {DtoUser} from "../../../../Dto/DtoUser";
import {DtoResponseSave} from "../../../../Dto/DtoResponseSave";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id:any;

  formEditUser: FormGroup;

  type_user_list:ResponseTypeUser[] = [];

  constructor(
    private fb:FormBuilder,
    private api:ApiService,
    private routeActive:ActivatedRoute,
    private router:Router
  ) {
    this.formEditUser = this.fb.group({
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
    this.id = this.routeActive.snapshot.params['id'];
    this.api.getUserForId(this.id).then((res)=>{
      let response:ResponseUser = res as ResponseUser;
      this.formEditUser = this.fb.group({
        name: [ response.name, Validators.required],
        name_restaurant: [ response.name_restaurant, Validators.required],
        address: [ response.address, Validators.required],
        phone: [ response.phone, Validators.required],
        email: [ response.email, Validators.required],
        password: [ response.password, Validators.required],
        type_user: [ response.type_user, Validators.required],
      });
    }).catch((e)=>{
      console.log(e);
    });
    this.api.getTypeUsers().then((res)=>{
      let response:DtoResponseTypeUser = res as DtoResponseTypeUser;
      this.type_user_list = response.data;
    })
  }

  editUser() {
    let user:DtoUser = {
      "name": this.formEditUser.value.name,
      "name_restaurant": this.formEditUser.value.name_restaurant,
      "address": this.formEditUser.value.address,
      "phone": this.formEditUser.value.phone,
      "email": this.formEditUser.value.email,
      "password": this.formEditUser.value.password,
      "type_user": this.formEditUser.value.type_user,
    }
    this.api.updateUser(user, this.id).then((res)=>{
      let mjs:DtoResponseSave = res as DtoResponseSave;
      alert(mjs.mjs);
      this.router.navigate(['/home/show_user']);
    }).catch((e)=>{
      console.log(e);
    })
  }
}
