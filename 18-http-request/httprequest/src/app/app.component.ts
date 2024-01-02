import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Post } from './post.model';
import { PostService } from './post.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'httprequest';

  loadedPosts :Post[] =[] ;

  constructor(private hpostService:PostService{

  }
  ngOnInit(): void {

    this.fetchPosts();
  }


  onCreatePost(postData: Post){
   
  }

  private fetchPosts(){
      
  }
  onClearPosts(){

  }

  onFetchPosts(){
    this.fetchPosts();
  }

}
