import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username
  password
  firstname
  lastname
  msg
  constructor() { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.username)
  }
}
