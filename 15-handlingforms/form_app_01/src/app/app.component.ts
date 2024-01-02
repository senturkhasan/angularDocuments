import { Component ,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f')
  signupForm!: NgForm;
  title = 'form_app_01';

  defaultQuestion='pet';
  answer?:string ;
  Isstate=false;
  genders=['male','famale'];
  submitted=false;
  user= {
    username: '',
    email: '',
    secretQuestion: '',
    answer:'',
    gender:''
  };
/*
  onSubmit(form:NgForm){

  }*/
  onSubmit(){
    this.submitted=true;
    console.log(this.signupForm.value.userData.username);
    
    this.user.username=this.signupForm.value.userData.username;
    this.user.email=this.signupForm.value.userData.email;
    this.user.gender=this.signupForm.value.gender;

    this.signupForm.reset();
  }

  suggestUserName(){
    console.log('1');
    //not comment - whole form value setting used command 
    /*this.signupForm?.setValue(
      {
        userData:{
          username:'test',
          email:''
        },
        secret:'pet2',
        gender:'famale',
        questionAnswer:'ss'
        
      }
    );*/
    //
    this.signupForm.form.patchValue({
      userData:{userName:'tesName1'}
    });

  }
}
