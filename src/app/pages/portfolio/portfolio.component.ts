import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
// import { url } from 'inspector';
import { ViewportScroller } from '@angular/common';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(
     public scroll: ViewportScroller,
      public api:ApiService,
      public settings:SettingsService) { }

  joke:any;
  JokeNoFound=true;

  gallery:any;
  page = 1;
  urlPicsum='';

  // nextPage(){
  //   this.page = this.page +1;
  //   this.urlPicsum='https://picsum.photos/v2/list?page='+this.page+'&limit=6'
  //   this.loadPics();
  //   console.log(this.page);
  //   console.log(this.urlPicsum);
  // }

  // backPage(){
  //   this.page>1 ? this.page -- : null;
  //   this.urlPicsum='https://picsum.photos/v2/list?page='+this.page+'&limit=6'
  //   this.loadPics();
  //   console.log(this.page);
  //   console.log(this.urlPicsum);
  // }

  // gotoPage(nb:number){
  //   this.page = nb;
  //   this.urlPicsum ='https://picsum.photos/v2/list?page='+this.page+'&limit=6';
  //   this.loadPics();

  // }

  // Page1(){
  //   this.page = this.page;
  //   this.urlPicsum='https://picsum.photos/v2/list?page='+this.page+'&limit=6'
  //   this.loadPics();
  //   console.log(this.page);
  //   console.log(this.urlPicsum);
  // }

  // Page2(){
  //   this.page = this.page =+1;
  //   this.urlPicsum='https://picsum.photos/v2/list?page='+this.page+'&limit=6'
  //   this.loadPics();
  //   console.log(this.page);
  //   console.log(this.urlPicsum);
  // }

  // Page3(){
  //   this.page = this.page =+2;
  //   this.urlPicsum='https://picsum.photos/v2/list?page='+this.page+'&limit=6'
  //   this.loadPics();
  //   console.log(this.page);
  //   console.log(this.urlPicsum);
  // }



  goTop(){
    this.scroll.scrollToAnchor("top");
  }

  loadPics(way="",nb=this.page){
    switch(way){
      case 'next':this.page++;
      break;

      case 'back':this.page>1 ?this.page-- : null;
      break;

      case '' :this.page = nb;
      break
    }
    this.urlPicsum=this.api.listPicsum(this.page)

    this.api.getUrl(this.urlPicsum).subscribe(
      (data)=>{
        this.gallery=data;
        console.log(data);
  })}

  ngOnInit(): void {
    this.api.getUrl(this.api.urlChuck).subscribe(
      (data)=>{
        this.joke=data;
        this.JokeNoFound = false;
        console.log(data);
      }
    )

    this.loadPics();
    this.settings.DisplayCaroussel = true;
      }

    
  }

