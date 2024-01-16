import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/users.service';
import { User } from '../models/usuario';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit {
  listUsers:User[] =[];
  constructor( private _userService:UserService, private toastr:ToastrService){
  }
  ngOnInit(): void {
    this.getUser();
    } 
  getUser(){
    this._userService.getUsers().subscribe(data => {
      console.log(data);
      this.listUsers=data;
    })
  } 
  deleteUser(id:any){
    this._userService.deleteUsers(id).subscribe(data =>{
      this.toastr.error("El producto fue eliminado con exito",'Producto eliminado');
      this.getUser();
    })
    
  }
  
}

