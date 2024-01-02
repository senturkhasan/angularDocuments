import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  boxItems={
    count:1,
    name:"Toys",
    decription:"Children used.."
  }
  serverElements=[{type:'server',name:'TestServer',content:'Just a test!'}];

  
  genderMenu=[{genderId:1,genderName:"Male"},{genderId:2,genderName:"Famele"}];
  
  constructor() { }

  ngOnInit(): void {
  }
  currentDate:Date= new Date();
  title = 'papirus';
  title2 = 'papirus2';
  fomrSubmitExample(form:NgForm){
    console.log(form.value);
    
  }

  genderChange(event:any){
    console.log(event);
    
  }
}
