import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { PageService } from './page.service';



@NgModule({
  declarations: [    
    FirstPageComponent,
    SecondPageComponent
  ],
  imports: [
    CommonModule
  ],
  //bu modulde kullanılan componentleri dışarıya acmak/kullanmak icin
  exports:[
    FirstPageComponent,
    SecondPageComponent
  ],
  providers:[PageService]
})
export class PagesModule { }
