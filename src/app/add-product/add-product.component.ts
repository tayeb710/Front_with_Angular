import { Component, OnInit } from '@angular/core';
import{ProductService} from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  _id:"";
  refer:"";
  label:"";
  price:"";
  quantity:"";

  constructor(private productService : ProductService,private router:Router) { }

  ngOnInit() {
  }

  addProduct(){
    this.productService.addProduct(this.refer,this.label,this.price,this.quantity)
    .subscribe(data=>{alert("seccesfully added product")},Error=>{alert("failed to add")}
    )
    this.router.navigate(['']);   
  }

  inputValue :string;

  Cancel() {
    this.inputValue='';
}
}
