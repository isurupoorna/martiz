import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from "../service/auth.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage:string = "";
  error: {name:string, message:string} = {name: "" , message: ""};

  constructor(private authservise:AuthService,private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit(form: NgForm){
    if(this.authservise.SignIn(form.value['email'],form.value['password'])){
      this.router.navigate(['']).then();
    }
    
    form.reset();
  }

}
