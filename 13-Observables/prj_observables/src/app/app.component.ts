import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'prj_observables';

  userActivated=false;

  private activatedSub!: Subscription;
  constructor(private userService:UserService){

  }
  ngOnInit(){
    //event emitter
     /* this.userService.activatedEmitter.subscribe(didActivated=>{
        this.userActivated=didActivated;
      });*/
     this.activatedSub=this.userService.activatedEmitter.subscribe(didActivated=>{
                         this.userActivated=didActivated; });
  }

  ngOnDestroy() {
   this.activatedSub.unsubscribe();
  }
}
