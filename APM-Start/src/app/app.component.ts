import { Component, OnInit } from '@angular/core';

import { AuthService } from './user/auth.service';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { slideInAnimation } from './app.animation';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit {
  pageTitle = 'Acme Product Management';
  isLoading = false;

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    if (this.authService.currentUser) { return this.authService.currentUser.userName; }

    return '';
  }

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationStart) { console.log('this happend'); this.isLoading = true; }

      if (ev instanceof NavigationEnd ||
          ev instanceof NavigationCancel ||
          ev instanceof NavigationError) { this.isLoading = false; }
    });
  }

  logOut(): void {
    this.authService.logout();
    console.log('Log out');
    this.router.navigate(['/welcome']);
  }
}
