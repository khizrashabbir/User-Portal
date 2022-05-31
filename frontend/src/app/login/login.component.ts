// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../api-services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  constructor(private router: Router, private service: LoginService) {
    this.formGroup = new FormGroup({});
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  // login() {
  //   if (this.formGroup.valid) {
  //     this.service.authenticateUser(this.formGroup.value).subscribe((res) => {
  //       if (res.success) {
  //         console.log(res);

  //         localStorage.setItem('username', res.username);
  //         localStorage.setItem('user_role', res.user_role);
  //         localStorage.setItem('token', res.accessToken);
  //         if(res.user_role=="Lea_Admin"){
  //         this.router.navigate(['activity']);
  //         }else if(res.user_role=="PTA_Admin"){
  //           this.router.navigate(['dashboard']);
  //         }
  //       } else {
  //         alert("Login Failed;");
  //       }
  //     }, error => {
  //       alert("Login Failed;");
  //     });
  //   }
  // }


}