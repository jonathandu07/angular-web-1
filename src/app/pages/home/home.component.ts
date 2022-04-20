import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public api:ApiService,) { }

  title = 'home';


  truc = this.api.propriete;

  arrayImg = [
    'auto-2179220.jpg',
    'bullets-2166491.jpg',
    'car-49278.jpg',
    'glock-2424292.jpg',
    'soldier-1447008.jpg',
  ];

  JsonImg = [
    { url: 'auto-2179220.jpg', alt: 'voiture' },
    { url: 'bullets-2166491.jpg', alt: 'balle' },
    { url: 'car-49278.jpg', alt: 'bugatti' },
    { url: 'glock-2424292.jpg', alt: 'glock' },
    { url: 'soldier-1447008.jpg', alt: 'soldat' },
  ];

  randomIndex = Math.floor(Math.random() * 5);

  sourceImg = this.arrayImg[this.randomIndex];

  compteur = 0;
  Myalert(msg: string) {
    alert(msg);
  }

  changeImage() {
    this.randomIndex = Math.floor(Math.random() * 5);
    this.sourceImg = this.arrayImg[this.randomIndex];
    this.compteur++;
    console.log('Nombre de changement de source', this.compteur);
  }

  myColor = '#282E69';

  ngOnInit(): void {
    console.log(this.sourceImg);
    this.changeImage();
    console.log(this.truc)
  }
}
