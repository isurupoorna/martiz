import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/customers/service/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,private authservise:AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.authservise.SignOut();
    this.router.navigate(['']).then();
  }

}
