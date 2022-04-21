import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public settings:SettingsService) { }

  firstName = '';
  lastName= '';
  onSubmit(formData:any){
    let score = 0;
    let max = 2;
    let errorMessage = '';

    formData.firstName.length > 2 ? score ++ :  errorMessage += "Firstname is too short !\n";
    formData.lastName.length > 2 ? score ++ :  errorMessage += "Firstname is too short !\n";

    let validation = score === max? true : false;

    if (validation){
      console.log("Youpi !",formData);
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
