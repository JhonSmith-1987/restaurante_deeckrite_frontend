import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./Components/login/login.component";
import {HomeComponent} from "./Components/home/home.component";
import {CreateUserComponent} from "./Components/home/create-user/create-user.component";
import {TypeUserComponent} from "./Components/home/type-user/type-user.component";
import {ShowUserComponent} from "./Components/home/show-user/show-user.component";
import {ClientComponent} from "./Components/client/client.component";
import {EditTypeUserComponent} from "./Components/home/type-user/edit-type-user/edit-type-user.component";
import {EditUserComponent} from "./Components/home/show-user/edit-user/edit-user.component";
import {CreateProductsComponent} from "./Components/home/create-products/create-products.component";
import {ShowProductsComponent} from "./Components/home/show-products/show-products.component";
import {CategoriesComponent} from "./Components/home/categories/categories.component";
import {CategoryProductComponent} from "./Components/client/category-product/category-product.component";
import {ProductComponent} from "./Components/client/product/product.component";

const routes: Routes = [
  { path:"login", component: LoginComponent },
  { path:"home", component: HomeComponent, children: [
      { path:"create_user", component: CreateUserComponent },
      { path:"show_user", component: ShowUserComponent },
      { path:"type_user", component: TypeUserComponent },
      { path:"edit_type_user/:id/:name", component: EditTypeUserComponent },
      { path:"edit_user/:id", component: EditUserComponent },
      { path:"create_product", component: CreateProductsComponent },
      { path:"show_product", component: ShowProductsComponent },
      { path:"categories", component: CategoriesComponent },
      { path:"", redirectTo:"create_user", pathMatch:"full" },
      { path:"**", redirectTo:"create_user", pathMatch:"full" }
    ]},
  { path:"client/:id", component: ClientComponent },
  { path:"product_category/:id/:category", component: CategoryProductComponent },
  { path:"product/:id/:client_id", component: ProductComponent },
  { path:"", redirectTo:"login", pathMatch:"full" },
  { path:"**", redirectTo:"login", pathMatch:"full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
