import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from "../service/auth.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  uid:string;

  constructor(private authservise:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if(this.authservise.signup(form.value['email'],form.value['password'])){
      console.log('done');
    }
    
    form.reset();
  }

}
