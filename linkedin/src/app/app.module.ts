import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { lookupListToken ,lookupLists} from './providers';
import { FavoriteDirective } from './directives/favorite.directive';
import { routing } from './app.routing';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
//import { MediaItemService } from 'services/media-item.service';

/*
const lookupLists= {
  mediums :['Moviers','Series']
}*/
@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    FavoriteDirective,
    Comp1Component,
    Comp2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,//template form icin
    ReactiveFormsModule,
    HttpClientModule,
    routing

  ],
  providers: [
   // {provide:'lookupListToken',useValue:lookupLists}
    {provide:lookupListToken,useValue:lookupLists}
   // providedIn:'root' eklendiği için servise gerek kalmadı MediaItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
