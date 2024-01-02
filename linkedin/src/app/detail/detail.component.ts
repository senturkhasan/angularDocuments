import { Component, 
         Input, 
         OnInit ,
         Output ,
         EventEmitter,
         Inject} from '@angular/core';

import { FormGroup ,FormControl, Validators, FormBuilder} from '@angular/forms'
import { MediaItemService } from 'services/media-item.service';
import { lookupListToken } from '../providers';
import { Router } from '@angular/router';
import { MediaItem } from '../models/MediaItem';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
   form!: FormGroup;
  @Input('mediaItemWatch') mediaItemWatch:MediaItem | undefined;

  @Output() delete:any=new EventEmitter();
  
  
  constructor(private formBuilder:FormBuilder,
              private mediaItemService:MediaItemService,
              @Inject(lookupListToken) public lookupLists:any,
              private router:Router){
    
  }
  ngOnInit(): void {
/*
    this.form= new FormGroup({
      medium: new FormControl('Movies'),
      name:new FormControl('',Validators.compose([
              Validators.required,
              Validators.pattern('[\\w\\-\\s\\/]+')
            ])), 
      category:new FormControl(''),
      year :new FormControl('',)
    });
*/
    this.form= this.formBuilder.group({
      medium: this.formBuilder.control('Movies'),
      name:this.formBuilder.control('',Validators.compose([
              Validators.required,
              Validators.pattern('[\\w\\-\\s\\/]+')
            ])), 
      category:this.formBuilder.control(''),
      year :this.formBuilder.control('',)
    });
  }

  onSubmit(values:any){
    console.log('Details : '+values.name);
    this.mediaItemService.add(values).subscribe(()=>{
      this.router.navigate(['/',this.mediaItemWatch?.title]);
    });
    
  }


  onDelete(){
    console.log('Deleted');
    this.delete.emit(this.mediaItemWatch);
  }


  yearValidator(control:FormControl)
  {
  if(control.value.trim().length===0){
    return null;
  }

  const year =parseInt(control.value,10)
  console.log('year : '+year);
  const minYear = 1900;
  const maxYear =2100;
  if(year >=minYear && year <=maxYear){
    return null;
  }else{
    return {year:true};
  }
  
  return true;
}



}
