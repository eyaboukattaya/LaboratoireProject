import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/AuthService.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  
  onSignOut() {
    this.authService.doLogout();
  }

}
