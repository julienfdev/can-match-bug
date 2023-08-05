import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from '../services/admin-auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  constructor(public adminAuthService: AdminAuthService) {}

  ngOnInit() {}
}
