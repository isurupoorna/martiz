import { Component, OnInit } from '@angular/core';
import { UserService } from "../service/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  user : any;
  id : string;
  userId : number;
  userName : string;
  userAddress : string;
  userPhone : string;
  status: string;
  
  isEdit: boolean = false;

  constructor(public userService:UserService) { }

  ngOnInit(): void {
    this.userService.get_allUsers().subscribe(data =>{
      this.user = data.map(e => {
        return {
          id: e.payload.doc.id,
          userId: e.payload.doc.data()['userId'],
          userName: e.payload.doc.data()['userName'],
          userAddress: e.payload.doc.data()['userAddress'],
          userPhone: e.payload.doc.data()['userPhone'],
          status: e.payload.doc.data()['status'],
        };

      })
      console.log(this.user);
      console.log(this.user.id);
      
    })
  }

  editUser(Record){
    this.isEdit = true;
    this.id = Record.id;
    this.userId = Record.userId;
    this.userName = Record.userName;
    this.userAddress = Record.userAddress;
    this.userPhone = Record.userPhone;
    this.status = Record.status;

  }

  updateOrder(){

  }

  cancel(){
    this.isEdit = false;
  }

  selectValue(event:any){
    this.status = event.target.value;
    console.log(this.status);
  }

}
