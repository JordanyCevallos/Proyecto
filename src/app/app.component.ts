import { Component } from '@angular/core';
import { AuthentifacionService } from './services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 title="hola"
 
 constructor(private Login:AuthentifacionService, private router:Router){

 }
 public vizualizarMenu():boolean{
  return this.Login.logeo();
 }
 onHome(){
  this.router.navigate (['home']);
}
  
}
