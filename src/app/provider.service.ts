import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Provider} from './provider';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*' })
};


@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private providerUrl = 'http://localhost:5000/providersPosts/providers';

  constructor(private http:HttpClient) { }

  public addProvider(pseudo: string ,location: string,domaine:string): Observable<string>  {
 
    const response = this.http.post(
      this.providerUrl ,
      {
        "pseudo":pseudo,
        "location":location,
        "domaine":domaine
        
      },{headers: new HttpHeaders().set('Content-Type', 'application/json'), responseType: 'text' }
    );
    return response;
  }
  

   getProviders():Observable<Provider[]>{
     return this.http.get<Provider[]>(this.providerUrl,httpOptions);
   }
   updateProvider (provider: Provider): Observable<Provider> {
    return this.http.put<Provider>(this.providerUrl+'/'+provider._id, provider, httpOptions);
  }
  removeProvider (_id: string): Observable<{}> {
    return this.http.delete(this.providerUrl+'/'+_id, httpOptions);
  }



}
