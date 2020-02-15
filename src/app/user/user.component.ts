import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  constructor(private http:HttpClient) { }
  usres :  any ;
  ngOnInit() { 
 
  let userdata = this.http.get('https://jsonplaceholder.typicode.com/users') 
    userdata.subscribe((data)=>this.usres=data);

  }

}
