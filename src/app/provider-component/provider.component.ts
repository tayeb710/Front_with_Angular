import { Component, OnInit } from '@angular/core';
import{ProviderService} from '../provider.service';
import{Provider} from '../provider';


@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

  private providers;
    selectedProvider: Provider;

  constructor(private providerService : ProviderService) { }

  getProviders(){
    console.log(this.providerService.getProviders());
    return this.providerService.getProviders().subscribe(
      data =>{ this.providers=data},
      err =>console.error(err),
      ()=>console.log('done loading providers')
    );
  }

  putProvider(){
    console.log(this.providerService.updateProvider(this.selectedProvider))
    return  this.providerService.updateProvider(this.selectedProvider).subscribe(      
      data => { this.providers = data },
      err => console.error(err),
      () => console.log('done updating providers'));
    
  }
  deleteProvider(_id: string) {

    console.log(this.providerService.removeProvider(this.selectedProvider._id));

    return  this.providerService.removeProvider(this.selectedProvider._id).subscribe(      
      data => { this.providers = data },
      err => console.error(err),
      () => console.log('done deleting provider'));
  }
  deleteRefreshProvider(_id : string){
    this.deleteProvider(_id);
    this.getProviders();
    
  }

  onSelect(provider: Provider): void {
    this.selectedProvider = provider;
  } 

  
  

  ngOnInit() {
    this.getProviders();
  }

}
