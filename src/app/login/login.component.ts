import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../shared/service.service';
import { User } from '../shared/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username;
  password;
  msg;
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    let user=new User(null,this.username,this.password,null,null);
    this.service.getUserByUsernameAndPassword(user).subscribe(
      (data)=>{
        console.log(data)
        if(data.id){
          localStorage.setItem("id",data.id+"");
          localStorage.setItem("username",data.userName);
          this.router.navigate(['/main']);
        }else{
          this.msg="wrong username and password"
        }
  
      },
      (err)=>{console.log(err);
        this.msg="wrong username and password"
      }
    )
  }

}
