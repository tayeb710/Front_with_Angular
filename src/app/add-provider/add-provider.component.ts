import { Component, OnInit } from '@angular/core';
import{ProviderService} from '../provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']
})
export class AddProviderComponent implements OnInit {
  _id:"";
  pseudo :"";
  location:"";
  domaine:"";

  constructor(private providerService : ProviderService,private router:Router) { }
    
  ngOnInit() {
  }
  addProvider(){
    this.providerService.addProvider(this.pseudo,this.location,this.domaine)
    .subscribe(data=>{alert("seccesfully added provider")},Error=>{alert("failed to add")}
    )
    this.router.navigate(['/providers']);   
  }

  inputValue :string;

  Cancel() {
    this.inputValue='';
}

}
