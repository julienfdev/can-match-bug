import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthService {
  loggedIn = false;
  get visiblePage() {
    return this.loggedIn ? 'ADMIN' : 'USER';
  }

  constructor(private router: Router) {}

  toggle() {
    this.loggedIn = !this.loggedIn;
    this.router.navigateByUrl('/', { onSameUrlNavigation: 'reload' });
  }
}
