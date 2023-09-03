import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TcnewsapiService {

  constructor(private _http:HttpClient) { }

  //top headlines API

  topHeadlinesNews= 'https://newsapi.org/v2/top-headlines?country=in&apiKey=76698cfc8f914af5a53e08729085b18a';

  //Tech News URL
  techNews='https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=76698cfc8f914af5a53e08729085b18a';

  //Business News
  businessNews='https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=76698cfc8f914af5a53e08729085b18a';


  //Use Business Method
  tcBuzzNews():Observable<any>{
    return this._http.get(this.businessNews)
  }

  //Use tech Method
  tcTechNews():Observable<any>{
    return this._http.get(this.techNews)
  }

  tcHeadlines():Observable<any>{
    return this._http.get(this.topHeadlinesNews)
  }
}
