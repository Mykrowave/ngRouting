import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {



  constructor(private authService: AuthService, private router: Router) {}



  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    this.checkLoggedIn(state.url);
    return this.authService.isLoggedIn;
  }
  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    this.checkLoggedIn(route.path);
    return this.authService.isLoggedIn;
  }

  private checkLoggedIn(path: string): void {
    if (!this.authService.isLoggedIn) {
      this.authService.redirectUrl = path;
      this.router.navigate(['/login']);
}
  }
}
