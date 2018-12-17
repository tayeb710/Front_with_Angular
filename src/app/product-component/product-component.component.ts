import { Component, OnInit } from '@angular/core';
import{ProductService} from '../product.service';
import{Product} from '../product';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {
    private products;
    selectedProduct: Product;


  constructor( private productService : ProductService) { }

  getProducts(){
    console.log(this.productService.getProducts());
    return this.productService.getProducts().subscribe(
      data =>{ this.products=data},
      err =>console.error(err),
      ()=>console.log('done loading prod')
    );
  }

  putProduct(){
    console.log(this.productService.updateProduct(this.selectedProduct))
      
    return  this.productService.updateProduct(this.selectedProduct).subscribe(      
      data => { this.products = data },
      err => console.error(err),
      () => console.log('done updating products'));
    
  }
  deleteProduct(_id: string) {

    console.log(this.productService.removeProduct(this.selectedProduct._id));

    return  this.productService.removeProduct(this.selectedProduct._id).subscribe(      
      data => { this.products = data },
      err => console.error(err),
      () => console.log('done deleting prod'));
  }
  deleteRefreshProduct(_id : string){
    this.deleteProduct(_id);
    this.getProducts();
    
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }    

  ngOnInit() {

    this.getProducts();
  }

}
