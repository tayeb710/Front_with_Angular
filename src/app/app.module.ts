import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import{ProviderComponent} from './provider-component/provider.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponentComponent,
    AddProductComponent,
    AddProviderComponent,
    ProviderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
