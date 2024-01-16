import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AuthentifacionService } from '../services/local-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public loginfrom!:FormGroup
  loginform=this.formBuilder.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })
  constructor(private formBuilder:FormBuilder, private Login1:AuthentifacionService) {}

  ngOnInit(): void {
  }

  get username(){
    return this.loginform.controls.username;
  }
  get password(){
    return this.loginform.controls.password;
  }
  login(){
    if(this.loginform.invalid){
      Object.values(this.loginform.controls).forEach(control=>{
        control.markAllAsTouched();
    });
    return;
  }
  
    if(!this.Login1.Ingresar(this.loginform.value)){
        alert("Usuario o contraseña invalido")
    }
    this.loginform.reset();
  }
  
}
 
