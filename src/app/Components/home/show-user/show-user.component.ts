import { Component, OnInit } from '@angular/core';
import {DtoResponseUser, ResponseUser} from "../../../Dto/DtoResponseUser";
import {ApiService} from "../../../Services/api.service";
import {DtoResponseSave} from "../../../Dto/DtoResponseSave";

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  messages:any;

  user_list:ResponseUser[] = [];

  constructor(
    private api:ApiService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.api.getUsers().then((res)=>{
      let response:DtoResponseUser = res as DtoResponseUser;
      this.user_list = response.data;
    })
  }

  deleteUser(id: number) {
    this.api.deleteUser(id).then((res)=>{
      let response:DtoResponseSave = res as DtoResponseSave;
      this.getUser();
      this.messages = response.mjs;
    })
  }
}
