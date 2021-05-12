import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/customers/service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router,private authservise:AuthService) { }

  ngOnInit(): void {
  }

  onLoginClick(){
    this.router.navigate(['admin/dashboard']);
  }

  onSubmit(form: NgForm){
    if(this.authservise.SignIn(form.value['email'],form.value['password']) && form.value['email']=="admin@martiz.com" ){
      this.router.navigate(['admin/dashboard']).then();
    }else{
      alert("Only admin can loggin!");
    }
    form.reset();
  }

}
