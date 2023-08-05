import { inject } from '@angular/core';
import { AdminAuthService } from '../services/admin-auth.service';

export function adminMatch() {
  const adminAuthService = inject(AdminAuthService);
  console.log(
    'GUARD HAS TRIGGERED, SHOULD DISPLAY ADMIN PAGE :',
    adminAuthService.loggedIn
  );
  return adminAuthService.loggedIn;
}
