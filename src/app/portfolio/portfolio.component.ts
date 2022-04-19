import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
// import { url } from 'inspector';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(public http:HttpClient, public scroll: ViewportScroller) { }

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


  getUrl(url:string){
    return this.http.get(url);
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
    this.urlPicsum='https://picsum.photos/v2/list?page='+this.page+'&limit=6'

    this.getUrl(this.urlPicsum).subscribe(
      (data)=>{
        this.gallery=data;
        console.log(data);
  })}

  ngOnInit(): void {
    this.http.get('https://api.chucknorris.io/jokes/random').subscribe(
      (data)=>{
        this.joke=data;
        this.JokeNoFound = false;
        console.log(data);
      }
    )

    this.loadPics();
      }
    
  }

