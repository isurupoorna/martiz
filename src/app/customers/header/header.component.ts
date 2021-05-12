import { Component, OnInit } from '@angular/core';
import { AuthService } from "../service/auth.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  islogin:boolean;

  constructor(private authservise:AuthService,private router: Router) { }

  ngOnInit(): void {
    this.islogin = this.authservise.isLoggedIn;
  }

  logout(){
    this.authservise.SignOut();
    this.router.navigate(['products']).then();
  }

}
