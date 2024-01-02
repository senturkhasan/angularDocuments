import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrls: ['./recipe-start.component.css']
})
export class RecipeStartComponent implements OnInit {
  pipeList=[
    {'name':'İhale firmadakiler','status':'online','createdDate':new Date(11,2,2022),'description':'ne zmana ön grölen tarih 1'},
    {'name':'İhale firmadakiler','status':'offline','createdDate':new Date(11,2,2022),'description':'ne zmana ön grölen tarih 1'}
  ]
  constructor() { }

  filterStatus='';
  ngOnInit(): void {

     
  }
  appStatus =new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('offline');
    },2000);
  })

  getStatusClasses(server:{name:string, status:string, createDate:Date}){
    return {
      'list-group-item-success' :server.status==='online',
      'list-group-item-danger' :server.status==='offline',
    }
  }

}
