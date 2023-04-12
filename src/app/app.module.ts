import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { CreateUserComponent } from './Components/home/create-user/create-user.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { TypeUserComponent } from './Components/home/type-user/type-user.component';
import { ShowUserComponent } from './Components/home/show-user/show-user.component';
import { ClientComponent } from './Components/client/client.component';
import { EditTypeUserComponent } from './Components/home/type-user/edit-type-user/edit-type-user.component';
import { EditUserComponent } from './Components/home/show-user/edit-user/edit-user.component';
import { CreateProductsComponent } from './Components/home/create-products/create-products.component';
import { ShowProductsComponent } from './Components/home/show-products/show-products.component';
import { CategoriesComponent } from './Components/home/categories/categories.component';
import { CategoryProductComponent } from './Components/client/category-product/category-product.component';
import { ProductComponent } from './Components/client/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CreateUserComponent,
    TypeUserComponent,
    ShowUserComponent,
    ClientComponent,
    EditTypeUserComponent,
    EditUserComponent,
    CreateProductsComponent,
    ShowProductsComponent,
    CategoriesComponent,
    CategoryProductComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
