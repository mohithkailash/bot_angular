import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-botrun',
  templateUrl: './botrun.component.html',
  styleUrls: ['./botrun.component.css']
})
export class BotrunComponent {
  constructor(public http:HttpClient){

  }
  public example() {
    console.log('in TS');
    var hello = this.http.get<any>('http://127.0.0.1:8000/',{});
    console.log(hello);
    var data = hello.subscribe((data)=>{

      console.log(data);
    })
    return hello;
  }

}


