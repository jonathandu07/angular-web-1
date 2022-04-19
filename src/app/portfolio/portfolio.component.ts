import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
// import { url } from 'inspector';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(public http:HttpClient) { }

  joke:any;
  JokeNoFound=true;

  gallery:any;
  page = 1;
  urlPicsum='https://picsum.photos/v2/list?page='+this.page+'&limit=6'

  nextPage(){
    this.page = this.page +1;
    this.urlPicsum='https://picsum.photos/v2/list?page='+this.page+'&limit=6'
    this.loadPics();
    console.log(this.page);
    console.log(this.urlPicsum);
  }

  backPage(){
    this.page ? this.page -- : null;
    this.urlPicsum='https://picsum.photos/v2/list?page='+this.page+'&limit=6'
    this.loadPics();
    console.log(this.page);
    console.log(this.urlPicsum);
  }

  gotoPage(nb:number){
    this.page = nb;
    this.urlPicsum ='https://picsum.photos/v2/list?page='+this.page+'&limit=6';
    this.loadPics();

  }

  Page1(){
    this.page = this.page;
    this.urlPicsum='https://picsum.photos/v2/list?page='+this.page+'&limit=6'
    this.loadPics();
    console.log(this.page);
    console.log(this.urlPicsum);
  }

  Page2(){
    this.page = this.page =+1;
    this.urlPicsum='https://picsum.photos/v2/list?page='+this.page+'&limit=6'
    this.loadPics();
    console.log(this.page);
    console.log(this.urlPicsum);
  }

  Page3(){
    this.page = this.page =+2;
    this.urlPicsum='https://picsum.photos/v2/list?page='+this.page+'&limit=6'
    this.loadPics();
    console.log(this.page);
    console.log(this.urlPicsum);
  }
  getUrl(url:string){
    return this.http.get(url);
  }

  loadPics(){
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

