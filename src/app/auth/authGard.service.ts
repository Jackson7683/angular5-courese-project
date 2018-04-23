import { Injectable } from "@angular/core";
import { CanActivate, CanLoad } from "@angular/router/src/interfaces";
import { AuthService } from "./auth.service";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router/src/router_state";
import { Route } from "@angular/compiler/src/core";

@Injectable()
export class AuthGard implements CanActivate, CanLoad {
    constructor(private authService: AuthService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.authService.isAuthenticated(); 
    }

    canLoad(route: Route): boolean {
        return this.authService.isAuthenticated();
    }
}