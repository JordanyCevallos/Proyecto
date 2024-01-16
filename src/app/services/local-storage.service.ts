import {Injectable } from "@angular/core";
@Injectable({
    providedIn:'root'
})
export class AuthentifacionService{
    useradmin:string='jordany'
    passwordA:string='123'
    private ingresar:boolean=false;
    constructor(){}
    
    public Ingresar(obj:any):boolean{
      this.ingresar=obj.username==this.useradmin &&  obj.password==this.passwordA;
        return this.ingresar ;
    }
    public logeo(){
        return this.ingresar;
    }
}
