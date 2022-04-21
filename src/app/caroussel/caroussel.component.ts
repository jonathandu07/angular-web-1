import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.css']
})
export class CarousselComponent implements OnInit {

  constructor(public api:ApiService, public settings:SettingsService) { }

  sliders:any;


  ngOnInit(): void {
    this.api.getUrl(this.api.urlPodek).subscribe(
      data => {
        this.sliders = data;
        console.log(data);
      }
    )

}
};