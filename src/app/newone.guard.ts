import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewoneGuard implements CanActivate {
  userlogin:boolean=false;
  onlogin(data:any){
    this.userlogin=data;
    console.log('data=',data);
    return this.userlogin;
    
  }
  canActivate() {
    if(this.userlogin){
    return true;
    }
    else{
      return false;
    }
  }
  
}
