import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  years:{anno:string,popu:number}[]=[]

  constructor(private http:HttpClient){

  }

  click(){
    this.years = []
    this.http.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population").subscribe(
     res => {
       var data=res["data"]
       data.forEach(x => {
        this.years.push({anno:x["Year"],popu:x["Population"]})  
       });
     },
     err => {
       console.log(err)
     } 
    )
  }
}
