import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLoginClick(){
    this.router.navigate(['admin/dashboard']);
  }

  onSubmit(form: NgForm){
    console.log(form.value);
    form.reset();
    this.router.navigate(['admin/dashboard']);
  }

}
