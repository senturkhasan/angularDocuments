import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './pagesModules/first-page/first-page.component';
import { SecondPageComponent } from './pagesModules/second-page/second-page.component';

const routes: Routes = [

  {path:'main-page',component:AppComponent},
  {path:'',redirectTo:'main-page',pathMatch:'full'},
  {path:'first-page',component:FirstPageComponent},
  {path:'first',redirectTo:'first-page',pathMatch:'prefix'},
  {path:'second-page/:id',component:SecondPageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
