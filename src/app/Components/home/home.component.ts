import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DtoResponseLoginUser} from "../../Dto/DtoResponseLoginUser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userLogged:DtoResponseLoginUser = {
    "id": 0,
    "name": '',
    "name_restaurant": '',
    "address": '',
    "phone": '',
    "type_user": ''
  };

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    let session = sessionStorage.getItem('session');
    if (session != 'administrador' || session === null ) {
      this.router.navigate(['/login']);
      return;
    }
    let data:any = localStorage.getItem('loggedUser')
    this.userLogged = JSON.parse(data);
  }

  logout() {
    localStorage.removeItem('loggedUser');
    sessionStorage.removeItem('session');
    this.router.navigate(['/login']);
  }
}
