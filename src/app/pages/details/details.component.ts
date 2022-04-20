import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  infoImageId = '';
  constructor(public http:HttpClient,private route:ActivatedRoute) { }
  itemId = '';
  itemInfo:any;
  source='';
  griser = '&grayscale';
  niveau = 1;
  flou = 'blur='+this.niveau;
  grisFlou = this.griser += this.flou;
  gris(){
    this.source +=this.griser;
  }

  floutage(){
    this.source +=this.flou;
  }

  plus(){
    this.source +this.flou+this.niveau++;
    console.log(this.source);
  }

  moins(){
    this.niveau >1 ?this.niveau--: null;
    this.source += this.niveau;
    console.log(this.source);
  }

  flouGris(){
    this.source += this.grisFlou;
  }

  ngOnInit(): void {
    // on récupère l'id dans la route active
    this.itemId = this.route.snapshot.params['itemId'];
    console.log('itemId',this.itemId);
    // on charge les données correspondantes de l'image
    this.http.get('https://picsum.photos/id/' +this.itemId+'/info').subscribe(data =>{ this.itemInfo=data;console.log(data);
    this.source = 'https://picsum.photos/id/'+this.itemId+'/1280/960?';
  })
  }
}
