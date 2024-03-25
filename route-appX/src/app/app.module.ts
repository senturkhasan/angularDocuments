import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactModule } from './contact/contact.module';
import { ProductsModule } from './products/products.module';
import { PizzaComponent } from './pizza/pizza.component';
import { ItemAddComponent } from './item-add/item-add.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [ 
    AppComponent, 
    NotFoundComponent,
    PizzaComponent,
    ItemAddComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContactModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
