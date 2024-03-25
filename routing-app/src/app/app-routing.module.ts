import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerResolver } from './servers/server/server-resolve.service';
import { ServerComponent } from './servers/server/server.component';
// import { ServerResolver } from './servers/server/server-resolve.service';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
const appRoutes : Routes  =[
  {path:'',component: HomeComponent},
  // {path:'users/:id/:name',component: UserComponent},
   {path:'users',component: UsersComponent,children:
   [{ path:':id/:name',component:UserComponent}]},
  {path:'servers',component: ServersComponent,
    children: [ 
      {path:'servers',component: ServerComponent,resolve:{server:ServerResolver}}, 
      {path:':id/edit',component:EditServerComponent,canDeactivate:[CanDeactivateGuard]}//canDeactivate:[CanDeactivateGuard]
    ]},
  {path:'not-found',component:ErrorPageComponent,data:{message:'Page not found!'}},
  {path:'**',redirectTo:'/not-found'},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
