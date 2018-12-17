import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponentComponent } from './product-component/product-component.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import{ProviderComponent} from './provider-component/provider.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductComponentComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: 'providers', component: ProviderComponent },
  { path: 'addProvider', component: AddProviderComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
