import { Component } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent {

  constructor(private api:TcnewsapiService){ }

  //Tech news Data

  techNewsData:any= [];
  ngOnInit(): void {
    this.api.tcTechNews().subscribe((result)=>{
      console.log(result.articles);
      this.techNewsData = result.articles;
    })
  }
}