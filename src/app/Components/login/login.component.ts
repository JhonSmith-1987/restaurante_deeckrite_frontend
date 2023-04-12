import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DtoLogin} from "../../Dto/DtoLogin";
import {ApiService} from "../../Services/api.service";
import {DtoResponseUser, ResponseUser} from "../../Dto/DtoResponseUser";
import {Router} from "@angular/router";
import {DtoResponseLoginUser} from "../../Dto/DtoResponseLoginUser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin:FormGroup;

  constructor(
    private fb:FormBuilder,
    private api:ApiService,
    private router:Router
  ) {
    this.formLogin = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    let session = sessionStorage.getItem('session');
    if (session === 'administrador') {
      this.router.navigate(['/home']);
    }
    if (session === 'cliente') {
      this.router.navigate(['/client']);
    }
  }

  login() {
    if (this.formLogin.status === "INVALID") {
      alert('debes llenar todos los campos')
      return;
    }
    let login_data:DtoLogin = {
      "email": this.formLogin.value.email,
      "password": this.formLogin.value.password
    }
    this.api.getUsers().then((res)=>{
      let response:DtoResponseUser = res as DtoResponseUser;
      let userLoginList:ResponseUser[] = response.data;
      let user_login:ResponseUser[] = userLoginList.filter(dataFilter=>dataFilter.email===login_data.email && dataFilter.password === login_data.password);
      if (user_login.length === 0) {
        alert('tu usuario o contraseña son incorrectos')
        return;
      }
      let loggedUser:DtoResponseLoginUser = {
        "id": user_login[0].id,
        "name": user_login[0].name,
        "name_restaurant": user_login[0].name_restaurant,
        "address": user_login[0].address,
        "phone": user_login[0].phone,
        "type_user": user_login[0].type_user
      }
      if (loggedUser.type_user === 'administrador') {
        sessionStorage.setItem('session', loggedUser.type_user);
        localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
        this.router.navigate(['/home']);
      }
      if (loggedUser.type_user === 'cliente') {
        sessionStorage.setItem('session', loggedUser.type_user);
        localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
        this.router.navigate(['/client']);
      }
    })
  }
}
