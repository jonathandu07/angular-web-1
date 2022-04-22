import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public settings:SettingsService,
    public http:HttpClient,
    public router:Router,
    public formBuilder:FormBuilder) { }

    userName = '';
    contrasena= '';
    urlhttpBin='https://httpbin.org/post'
    loginForm = new FormGroup({user : new FormControl(),
    password : new FormControl()})

    login(){
      console.log(this.loginForm.value);

      this.http.post(this.urlhttpBin,this.loginForm.value).subscribe(
        response => {
          console.log("le serveur nous répond woohoo !!!",response)})
          
    }



  ngOnInit(): void {
    this.settings.DisplayCaroussel = false;
    this.loginForm = this.formBuilder.group({
      user:['',[Validators.required,Validators.minLength(3)]],
      password:['',[Validators.required,Validators.minLength(10)]]
    })
  }

}
