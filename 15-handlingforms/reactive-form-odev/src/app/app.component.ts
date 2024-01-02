import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerValidator } from './custom-validator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'reactive-form-odev';
  pformUser!: FormGroup;

  ngOnInit() {
    this.pformUser = new FormGroup({
      'projectName': new FormControl(
        null,
        [Validators.required, CustomerValidator.invalidProjectName],
     //   CustomerValidator.asyncInvalidProjectName
      ),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('critical')
    });
  }


  
  onSaveUser(){
    console.log('1');
    
    console.log(this.pformUser.value);
    
  }
}
