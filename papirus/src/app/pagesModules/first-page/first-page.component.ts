import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  constructor(private route:Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let pageNumber = this.activatedRoute.snapshot.queryParamMap.get('pageNumber');
    let pageSize = this.activatedRoute.snapshot.queryParamMap.get('pageSize');
    console.log(`page : ${pageNumber}  / page Size : ${pageSize}`);
    

    this.activatedRoute.queryParamMap.subscribe(item=> {
      console.log(`Dynmic page No: ${ item.get('pageNumber')}  / page Size ${item.get('pageSize')}`);
      
     
      
    })
  }
  pageRedirect(pageName:string){
    console.log(pageName);
    
    this.route.navigateByUrl(pageName);
   /* this.route.navigateByUrl(`pageName/{4}`);
    this.route.navigate(['second-page',2]);*/
   
  }

  isActive(){
    return true;
  }
  changeQueryParams(){

    this.route.navigate(['first-page',{queryParams:{pageNumber:11,pageSize:4}}]);
  }
}
