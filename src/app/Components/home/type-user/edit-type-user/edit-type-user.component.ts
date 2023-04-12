import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../../Services/api.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {DtoTypeUser} from "../../../../Dto/DtoTypeUser";
import {ResponseTypeUser} from "../../../../Dto/DtoResponseTypeUser";
import {DtoResponseSave} from "../../../../Dto/DtoResponseSave";

@Component({
  selector: 'app-edit-type-user',
  templateUrl: './edit-type-user.component.html',
  styleUrls: ['./edit-type-user.component.css']
})
export class EditTypeUserComponent implements OnInit {

  id:any;
  name:string = '';

  formEditTypeUser: FormGroup;

  constructor(
    private fb:FormBuilder,
    private api:ApiService,
    private routeActive:ActivatedRoute,
    private router:Router
  ) {
    this.formEditTypeUser = this.fb.group({
      name: [ '', Validators.required]
    });
  }

  ngOnInit(): void {
    let name = this.routeActive.snapshot.params['name'];
    this.id = this.routeActive.snapshot.params['id'];
    this.formEditTypeUser = this.fb.group({
      name: [ name, Validators.required]
    });
  }

  editTypeUser() {
    if (this.formEditTypeUser.status === "INVALID") {
      alert('Llenar todos los campos')
      return;
    }
    let type_user:DtoTypeUser = {
      "name": this.formEditTypeUser.value.name
    }
    this.api.updateTypeUser(type_user, this.id).then((res)=>{
      let mjs:DtoResponseSave = res as DtoResponseSave;
      alert(mjs.mjs);
      this.router.navigate(['/home/type_user']);
    }).catch((e)=>{
      console.log(e);
    })
  }
}
