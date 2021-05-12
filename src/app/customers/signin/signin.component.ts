import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from "../service/auth.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  uid:string;

  constructor(private authservise:AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if(this.authservise.signup(form.value['email'],form.value['password'])){
      alert('Welcome to Martiz');
      this.router.navigate(['']).then();
    }
    
    form.reset();
  }

}
