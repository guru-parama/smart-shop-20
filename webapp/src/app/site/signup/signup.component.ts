import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userFlag: Boolean;
  userForm: FormGroup;
  passwordFlag: boolean;
  newUser: User = {
    id: 0,
    userId: "",
    firstName: "",
    lastName: "",
    password: "",
    userType: "",
    status: "",
    gender: null,
    age: null,
    contactNumber: null,
    question1: "",
    answer1: "",
    question2: "",
    answer2: "",
    question3: "",
    answer3: "",
  };
  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit() {
    
    this.userForm = new FormGroup({
      userId: new FormControl('',[Validators.required, Validators.maxLength(15)]),
      userType: new FormControl('',[Validators.required]),
      firstName: new FormControl('',[Validators.required, Validators.maxLength(15)]),
      lastName: new FormControl('',[Validators.required, Validators.maxLength(15)]),
      password: new FormControl('',[Validators.required, Validators.maxLength(15)]),
      confirmPassword : new FormControl('',[Validators.required]),
      gender: new FormControl('',[Validators.required]),
      age: new FormControl('',[Validators.required, Validators.maxLength(2), Validators.pattern('[0-9]+')]),
      contactNumber: new FormControl('',[Validators.required]),
      question1: new FormControl('',[Validators.required]),
      answer1: new FormControl('',[Validators.required]),
      question2: new FormControl('',[Validators.required]),
      answer2: new FormControl('',[Validators.required]),
      question3: new FormControl('',[Validators.required]),
      answer3: new FormControl('',[Validators.required]),
    })
  }

  passMatch(){
    if(this.userForm.value.password == this.userForm.value.confirmPassword ){
      this.passwordFlag = true;
    }
    else
      this.passwordFlag = false;
  }

  signup(){
    this.newUser.userId = this.userForm.value.userId;
    this.newUser.firstName = this.userForm.value.firstName;
    this.newUser.lastName = this.userForm.value.lastName;
    this.newUser.password = this.userForm.value.password;
    this.newUser.gender = this.userForm.value.gender;
    this.newUser.age = this.userForm.value.age;
    this.newUser.contactNumber = this.userForm.value.contactNumber;
    this.newUser.userType = this.userForm.value.userType;
    if(this.newUser.userType == "U")
      this.newUser.status = "A";
    else 
      this.newUser.status = "P";
    this.newUser.question1 = this.userForm.value.question1;
    this.newUser.answer1 = this.userForm.value.answer1;
    this.newUser.question2 = this.userForm.value.question2;
    this.newUser.answer2 = this.userForm.value.answer2;
    this.newUser.question3 = this.userForm.value.question3;
    this.newUser.answer3 = this.userForm.value.answer3;
    this.userservice.addUser(this.newUser).subscribe(response =>{
      this.router.navigate(['login']);
    },
    error=>{
      if(error.status==406)
        this.userFlag = true;
    });
  }
}
