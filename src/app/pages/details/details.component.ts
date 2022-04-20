import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  infoImageId = '';
  constructor(private route:ActivatedRoute, public api:ApiService ) { }
  itemId = 0;
  itemInfo:any;
  source='\assets\loading-gif-icon-0.jpg';
  griser = '&grayscale';
  niveau = 1;
  flou = 'blur=';
  // grisFlou = this.griser += this.flou;
  gris(){
    this.source +=this.griser;
  }

  floutage(){
    this.source +=this.flou;
  }
  generateSource(){
    this.source = this.api.bigImgPicsum(this.itemId);
    this.griser? this.source += 'grayscale&' :null;
    this.niveau >0? this.source += 'blur=' + this.niveau : null;
  }
  plus(){
    this.niveau < 10? this.niveau++: null;
    this.generateSource();
    console.log(this.source);
  }

  moins(){
    this.niveau >1 ?this.niveau--: null;
    this.generateSource();
    console.log(this.source);
  }

  flouGris(){
    this.griser? this.source += 'grayscale&' :null;
    this.niveau >0? this.source += 'blur=' + this.niveau : null;
  }

  annuler(){

  }
  ngOnInit(): void {
    // on récupère l'id dans la route active
    this.itemId = this.route.snapshot.params['itemId'];
    console.log('itemId',this.itemId);
    // on charge les données correspondantes de l'image
    this.api.getUrl(this.api.urlPicsum +this.itemId+'/info').subscribe(data =>{ this.itemInfo=data;console.log(data);
    this.generateSource();
  })
  }
}
