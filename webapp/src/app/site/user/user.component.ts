import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userList: User[];
  approvalFlag: boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.approvalFlag = false;
    this.userService.getAllUsers().subscribe(response =>{
      this.userList = response;
      if(this.userList.length == 0){
          this.approvalFlag = true;
      }
    })
  }

  approve(user: User){
    this.userService.approve(user).subscribe(resp =>{
      this.userService.getAllUsers().subscribe(response =>{
        this.userList = response;
        if(this.userList.length == 0){
            this.approvalFlag = true;
        }
      })
    });
  }
  reject(user){
    this.userService.reject(user).subscribe(resp =>{
      this.userService.getAllUsers().subscribe(response =>{
        this.userList = response;
        if(this.userList.length == 0){
            this.approvalFlag = true;
        }
      })
    });
  }
}
