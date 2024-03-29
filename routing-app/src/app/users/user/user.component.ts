import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {

  user :{ id: number; name: string; } ;
  constructor(private activatedRoute:ActivatedRoute) { }



  
  ngOnInit(): void {
    console.log('user'+this.activatedRoute.snapshot);
    
    this.user={
      id:this.activatedRoute.snapshot.params['id'],
      name:this.activatedRoute.snapshot.params['name']
    }
  }

}
