import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from "../service/auth.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservise:AuthService) { }

  ngOnInit(): void {
  }


  onSubmit(form: NgForm){
    this.authservise.SignIn(form.value['email'],form.value['password'])
    form.reset();
  }

}
