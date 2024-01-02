import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { backend_url } from 'src/app/consts';
import { CountryDropMenu } from 'src/app/models/country-drop-menu';
import { GenderRadioMenu } from 'src/app/models/gender-radio-menu';
import { HelpServiceService } from 'src/app/services/help-service.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

 loginForm:FormGroup;
 countryMenu:CountryDropMenu[]=[{text:'Ülke 1',value:10},{text:'Ülke 2', value:20}];
  genderRadioMenu:GenderRadioMenu[] = [{text:'Men',value:1},{text:'Women',value:2}];
  constructor(fb:FormBuilder,helpService:HelpServiceService,
    @Inject(backend_url)private url:string
    ) {
    this.loginForm =fb.group({
      userName:fb.control('',Validators.required),
      password:fb.control('',[Validators.required,Validators.minLength(4)]),
      rememberMe:false,//formControl nesnesi
      country:fb.control('',Validators.required),
      genderItem:[1],
      birtDate:fb.control('',[Validators.required,this.isOldEnough])

    })

    console.log(this.url);
    
   }
   //ya da
   /*constructor() {
    this.loginForm =new FormGroup({
      userName: new FormControl(),
      password:new FormControl(),
      rememberMe:new FormControl(false)
    })
   }
   ile alınabilir
   */
   
  ngOnInit(): void {
  }

  register(){
    console.log(this.loginForm.value);
    
  }

  isInvalidMessageShow(formControlName:string):boolean | undefined{
   return  this.loginForm.get(formControlName)?.invalid 
                        && (this.loginForm.get(formControlName)?.dirty
                         || this.loginForm.get(formControlName)?.touched) ;
  }

  isValid(formControlName:string):boolean{

    let formControl =this.loginForm.get(formControlName);

    if(( formControl?.invalid 
         && (formControl ?.dirty
         || formControl?.touched))) return false;

      if(formControl ?.errors?.['required']) return true;   
      if(formControl ?.errors?.['minlength']) return true;   

   return false;   
  }

  isSuccessValid(formControlName:string){
    let formControl =this.loginForm.get(formControlName);
    return  formControl?.valid && (formControl.dirty || formControl.touched);
  }

  isOldEnough = (control:FormControl):{isYoung:true}|null =>{
    const birtDate = new Date(control.value);

    birtDate.setFullYear(birtDate.getFullYear()+18);

    return birtDate<new Date() ?null :{isYoung:true};
  }

}
