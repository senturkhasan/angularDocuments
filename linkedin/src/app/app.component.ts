import { Component, OnInit } from '@angular/core';
import { MediaItemService } from 'services/media-item.service';
import { MediaItem } from './models/MediaItem';
import { MediaItemResponse } from './models/MediaItemResponse';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  mediaItems!: MediaItem[];
  title = 'linkedin';
  medium ='';

  /*
  
      userId:number,
    id:number,
    title:string ,
    completed:boolean

  */ 
  firstMediaItem :MediaItem={
    id:1,
    userId:100,
    title:'İstanbul',
    completed:false
  }

  constructor( private mediaItemService:MediaItemService,
               private activatedRoute :ActivatedRoute){

  }

  ngOnInit(){
    
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      
      let medium =paramMap.get('medium')!;
      if(medium.toLowerCase()==='all')
       {
        medium='';
       }
       this.getMediaItems(medium);
    });
    this.mediaItems.push(this.firstMediaItem);
   
  }


 

  onMediaItemDelete(mediaItem:any){
    this.mediaItemService.delete(mediaItem);

    /*this.mediaItemService.delete(mediaItem).subscribe(()=>{
      this.getMediaItems(this.medium);
    });*/
  }
  


  onSubmit(mediaItem:any){
    console.log(mediaItem);
    this.mediaItemService.add(mediaItem).subscribe();
  }

  getMediaItems(medium:string){
    this.medium=medium;
    
  //  this.mediaItems= this.mediaItemService.get('x');
    /*
    this.mediaItemService.get(medium)
    .subscribe(mediaItems=>{
      
      
      this.mediaItemsResponse=mediaItems;
    });*/
  }
}
