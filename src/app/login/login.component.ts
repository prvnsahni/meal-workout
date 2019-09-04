import { Component, OnInit } from '@angular/core';
import { DataService } from '../user-panel/services/data.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = null;
  show = false;
  user = '';
  pass = '';
  fail = false;

  constructor(private dataService: DataService,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup ({
      userName: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    },)
  }
  submit(){
    this.show = true;
    this.user = this.loginForm.get('userName').value;
    this.pass = this.loginForm.get('password').value;

    if(this.user === 'qwerty' && this.pass === '123') {
      this.dataService.loginStatus = true;
      this.router.navigateByUrl('/meals');
      this.dataService.loginStatus = true;
    } else {
      this.fail = true;
    }
  }

}
