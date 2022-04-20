import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }
  chemin = "/assets/caroussel";
  propriete = "GRATIA DEI FLOREBO QUOCUMQUE FERAR";

  urlChuck = 'https://api.chucknorris.io/jokes/random';
  urlPhoto = 'https://picsum.photos/v2/list?page=';
  urlPicsum = 'https://picsum.photos/id/';

  listPicsum(num:number){
    return this.urlPhoto + num +'&limit=6'
  }

  imgPicsum(id:number){
    return this.urlPicsum + id + '/640/480'
  }
  
  getUrl(url:string){
    return this.http.get(url);
  } 

  monAlert(){
    alert(this.propriete);
  }

  bigImgPicsum(itemId:number){
    return this.urlPicsum +itemId+'/1280/960?'
  }


}
