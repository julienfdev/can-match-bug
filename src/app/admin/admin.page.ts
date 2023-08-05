import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from '../services/admin-auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  constructor(public adminAuthService: AdminAuthService) {}

  ngOnInit() {}
}
