import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public settings:SettingsService,
    public http:HttpClient,
    public router:Router) { }

  firstName = '';
  lastName= '';
  urlhttpBin='https://httpbin.org/post'
  onSubmit(formData:any){
    let score = 0;
    let max = 2;
    let errorMessage = '';

    formData.firstName.length > 2 ? score ++ :  errorMessage += "Firstname is too short !\n";
    formData.lastName.length > 2 ? score ++ :  errorMessage += "Firstname is too short !\n";

    let validation = score === max? true : false;

    if (validation){
      console.log("Youpi !",formData);

      const headers = new HttpHeaders().set('Content-Type', 'application:x-www-form-urlencode')

      this.http.post(this.urlhttpBin, formData,{headers}).subscribe(
        response => {
          console.log("le serveur nous répond woohoo !!!",response);
          // window.location.href="https://google.fr;"
          // pour rediriger l'utilisateur vers une autre page
          this.router.navigateByUrl("/");
          // faire la même chose mais rediriger sur la home
          // window.open('url', '_blank') pour relocaliser dans un nouveau onglet

        }
      )
    }


    else{
      alert("ooops an error occured!\n" + errorMessage);
    }

    console.log(formData);
  }

  ngOnInit(): void {
    this.settings.DisplayCaroussel = false;
  }

}
