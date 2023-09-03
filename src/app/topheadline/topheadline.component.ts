import { Component } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';

@Component({
  selector: 'app-topheadline',
  templateUrl: './topheadline.component.html',
  styleUrls: ['./topheadline.component.css']
})
export class TopheadlineComponent {

  constructor(private api:TcnewsapiService) { }

  //display headlines data
  topHeadlinesData:any = [];

  ngOnInit(): void {
    this.api.tcHeadlines().subscribe((result)=>{
      console.log(result.articles);
      this.topHeadlinesData = result.articles;
    })
  }

}
