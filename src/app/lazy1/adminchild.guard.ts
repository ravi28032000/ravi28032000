import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminchildGuard implements CanActivateChild {
  define:boolean=true;
  onlogin(val:boolean){

    this.define=val;
    console.log("child=",this.define)
    return this.define
    
  }
  canActivateChild(
  ){
    if(this.define){
        return true;
      }
      else{
        return false;
      }
  }
  
}
