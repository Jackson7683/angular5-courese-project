import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router/src/interfaces";
import { AuthService } from "./auth.service";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router/src/router_state";

@Injectable()
export class AuthGard implements CanActivate {
    constructor(private authService: AuthService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.authService.isAuthenticated(); 
    }
}