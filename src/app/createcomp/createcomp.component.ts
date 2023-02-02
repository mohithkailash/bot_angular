import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-createcomp',
  templateUrl: './createcomp.component.html',
  styleUrls: ['./createcomp.component.css']
})
export class CreatecompComponent {
  subreddit= '';
  keyword = '';

  constructor(private http: HttpClient){

  }
  

  upvote() {
    const data = {
      subreddit: this.subreddit,
      keyword: this.keyword
    };
    let headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin','*');
    var request = this.http.post("http://localhost:8000",data, {
      headers: headers
    });
    var subscription = request.subscribe();
  }
}
