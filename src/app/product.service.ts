import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './product';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*' })
};

@Injectable({
  providedIn: 'root'
})


export class ProductService {
    private productUrl = 'http://localhost:5000/productsPosts/products';

    constructor(private http:HttpClient) {

     }

     public addProduct(refer: string ,label: string,price:string,quantity:string): Observable<string>  {
 
      const response = this.http.post(
        this.productUrl ,
        {
          "refer":refer,
          "label":label,
          "price":price,
          "quantity":quantity
        },{headers: new HttpHeaders().set('Content-Type', 'application/json'), responseType: 'text' }
      );
      return response;
    }
    

     getProducts():Observable<Product[]>{
       return this.http.get<Product[]>(this.productUrl,httpOptions);
     }
     updateProduct (product: Product): Observable<Product> {
      return this.http.put<Product>(this.productUrl+'/'+product._id, product, httpOptions);
    }
    removeProduct (_id: string): Observable<{}> {
      return this.http.delete(this.productUrl+'/'+_id, httpOptions);
    }

}
