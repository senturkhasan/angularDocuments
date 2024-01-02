import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router :Router) { }

  ngOnInit(): void {

  let id =  this.route.snapshot.paramMap.get('id');
  console.log(id);
  

    this.route.paramMap.subscribe(item =>{
      console.log(`Dynmic ID: ${item.get('id')}`);
      
    })

  }

  changeId(){
    this.router.navigate(['second-page',9])
  }

}
