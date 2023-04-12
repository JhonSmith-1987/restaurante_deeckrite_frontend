import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {DtoTypeUser} from "../Dto/DtoTypeUser";
import {DtoUser} from "../Dto/DtoUser";
import {DtoLogin} from "../Dto/DtoLogin";
import {DtoCategories} from "../Dto/DtoCategories";
import {DtoProducts} from "../Dto/DtoProducts";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "/api/";

  constructor(
    private http:HttpClient
  ) { }

  // ******************************** routes type user

  async postTypeUser(type_user:DtoTypeUser) {
    const headers = new HttpHeaders({
      "Content-Type" : "application/json",
    })
    try {
      let data = await this.http.post(this.url + "typeUser", type_user, {headers:headers}).toPromise();
      return data;
    }catch (e) {
      return e;
    }
  }

  async getTypeUsers() {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    })
    try {
      let data = await this.http.get(this.url + "typeUsers", {headers:headers}).toPromise();
      return data;
    } catch (e) {
      return e;
    }
  }

  async getTypeUserForId(id:number) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    })
    try {
      let data = await this.http.get(this.url + "typeUser/" + id, {headers:headers}).toPromise();
      return data;
    } catch (e) {
      return e;
    }
  }

  async deleteTypeUser(id:number) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    })
    try {
      let data = await this.http.delete(this.url + "typeUser/" + id, {headers:headers}).toPromise();
      return data;
    } catch (e) {
      return e;
    }
  }

  async updateTypeUser(type_user:DtoTypeUser, id:any) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    })
    try {
      let data = await this.http.put(this.url + "typeUser/" + id, type_user, {headers:headers}).toPromise();
      return data;
    } catch (e) {
      return e;
    }
  }

  // **************************************** routes user

  async postUser(user:DtoUser) {
    const headers = new HttpHeaders({
      "Content-Type" : "application/json",
    })
    try {
      let data = await this.http.post(this.url + "userClient", user, {headers:headers}).toPromise();
      return data;
    }catch (e) {
      return e;
    }
  }

  async getUsers() {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    })
    try {
      let data = await this.http.get(this.url + "userClients", {headers:headers}).toPromise();
      return data;
    } catch (e) {
      return e;
    }
  }

  async getClients() {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    })
    try {
      let data = await this.http.get(this.url + "userClientForClient", {headers:headers}).toPromise();
      return data;
    } catch (e) {
      return e;
    }
  }

  async getUserForId(id:number) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    })
    try {
      let data = await this.http.get(this.url + "userClient/" + id, {headers:headers}).toPromise();
      return data;
    } catch (e) {
      return e;
    }
  }

  async deleteUser(id:number) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    })
    try {
      let data = await this.http.delete(this.url + "userClient/" + id, {headers:headers}).toPromise();
      return data;
    } catch (e) {
      return e;
    }
  }

  async updateUser(user:DtoUser, id:any) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    })
    try {
      let data = await this.http.put(this.url + "userClient/" + id, user, {headers:headers}).toPromise();
      return data;
    } catch (e) {
      return e;
    }
  }

  // **************************************** categories

  async postCategory(category:DtoCategories) {
    const headers = new HttpHeaders({
      "Content-Type" : "application/json",
    })
    try {
      let data = await this.http.post(this.url + "category", category, {headers:headers}).toPromise();
      return data;
    }catch (e) {
      return e;
    }
  }

  async getCategory() {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    })
    try {
      let data = await this.http.get(this.url + "categories", {headers:headers}).toPromise();
      return data;
    } catch (e) {
      return e;
    }
  }

  async getCategoryForClient(client_id:number) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    })
    try {
      let data = await this.http.get(this.url + "categoriesForClient/" + client_id, {headers:headers}).toPromise();
      return data;
    } catch (e) {
      return e;
    }
  }

  // **************************************** products

  async postProduct(product:DtoProducts) {
    const headers = new HttpHeaders({
      "Content-Type" : "application/json",
    })
    try {
      let data = await this.http.post(this.url + "product", product, {headers:headers}).toPromise();
      return data;
    }catch (e) {
      return e;
    }
  }

  async getProducts() {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    })
    try {
      let data = await this.http.get(this.url + "products", {headers:headers}).toPromise();
      return data;
    } catch (e) {
      return e;
    }
  }

  async getProductsForId(id:number) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    })
    try {
      let data = await this.http.get(this.url + "products/" + id, {headers:headers}).toPromise();
      return data;
    } catch (e) {
      return e;
    }
  }

  async getProductsForClient(client_id:number) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    })
    try {
      let data = await this.http.get(this.url + "productsForClient/" + client_id, {headers:headers}).toPromise();
      return data;
    } catch (e) {
      return e;
    }
  }

  async getProductsForClientAndCategory(client_id:number, category:string) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    })
    try {
      let data = await this.http.get(this.url + "productsForClientAndCategory/" + client_id + "/" + category, {headers:headers}).toPromise();
      return data;
    } catch (e) {
      return e;
    }
  }

  async deleteProduct(id:number) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    })
    try {
      let data = await this.http.delete(this.url + "product/" + id, {headers:headers}).toPromise();
      return data;
    } catch (e) {
      return e;
    }
  }

}
