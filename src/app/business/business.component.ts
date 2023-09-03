import { Component } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent {

  constructor(private api:TcnewsapiService){ }

  tcBuzzNewsData:any=[];

  ngOnInit(): void {
    this.api.tcBuzzNews().subscribe((result)=>{
      console.log(result.articles);
      this.tcBuzzNewsData = result.articles;
    })
  }

}
