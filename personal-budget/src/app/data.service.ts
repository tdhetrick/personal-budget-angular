import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public colors = ["#FF5733", "#FFC133", "#DBFF33", "#4CFF33", "#33FF99", "#33C6FF", "#9933FF"];
  public chartdata =[];
  public chartlabels =[];


  constructor(private http: HttpClient) {
    
   }
   fetchData(): Observable<void> {
    return this.http.get('http://localhost:3000/budget').pipe(
      tap((response: any) => {
        this.chartlabels = response.theBudget.map((item: any) => item.title);
        this.chartdata = response.theBudget.map((item: any) => item.budget);
      })
    );
  }
  

  
}
