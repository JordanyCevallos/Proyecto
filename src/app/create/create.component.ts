import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/users.service';
import { User } from '../models/usuario';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  title="Registro de Usuario"
  id:string;
  form: FormGroup;
  constructor(private fb:FormBuilder,private router:Router,private toastr: ToastrService, private _userService:UserService, private aRouter:ActivatedRoute){
    this.form = this.fb.group({
      name:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      ci:[,[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^\d+$/)]],
      password:['',Validators.required],
    }) ;
    this.id = this.aRouter.snapshot.paramMap.get('id')!;
  }
 
  ngOnInit(): void {
    this.edit();
  }
  addUser(){
    const USER:User = {
      name: this.form.get('name')?.value,
      email:this.form.get('email')?.value,
      ci:this.form.get('ci')?.value,
      password:this.form.get('password')?.value,
    }
    if (this.id !== null){
      this._userService.editUser(this.id,USER).subscribe(data =>{
        this.toastr.success('El user fue actualizado con exito', 'User Actualizado');
        this.router.navigate(['view']);
        this.form.reset(); 
      })
    }else{
        this._userService.saveUser(USER).subscribe(data=>{
        this.toastr.success('El user fue registrado con exito', 'User Registrado');
        this.router.navigate(['view']);
        this.form.reset();
      })
      
    }
      
    
  }
  edit(){
    if(this.id !==null){
      this.title ='Editar Usuario'
      this._userService.getUser(this.id).subscribe(data =>{
        this.form.setValue({
          name: data.name,
          email: data.email,
          ci: data.ci,
          password: data.password,
        })
      })
    }
  }

}
