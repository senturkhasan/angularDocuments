import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styles: [
  ]
})
export class EditServerComponent implements OnInit,CanComponentDeactivate {

  server :{id:number,name:string,status:string};
  serverName='';
  serverStatus='';
  allowEdit=false;
  changeSaved=false;

  constructor(private serversService:ServersService,
              private route:ActivatedRoute,
              private router :Router) { 

              }

  ngOnInit(): void {
    console.log(1);
    
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    
    this.route.queryParams
    .subscribe(
      (queryParams:Params)=>{
        this.allowEdit=queryParams['allowEdit']==='1' ? true :false;

      }
    );
    this.route.fragment.subscribe();
    const id=+this.route.snapshot.params['id'];
    this.server=this.serversService.getServer(id)!;
    this.serverName=this.server.name;
    this.serverStatus=this.server.status;
  }
  onUpdateServer(){
    this.serversService.updateServer(this.server.id,{name:this.serverName,status:this.serverStatus});
    this.changeSaved=true;
    this.router.navigate(['../'],{relativeTo:this.route});
  }
  canDeactivate() : Observable<boolean> | Promise<boolean> | boolean{

    if(!this.allowEdit){
      return true;
    }
    console.log('-----------------');
    
    console.log(this.serverName);
    console.log(this.server.name );
    console.log(this.serverStatus);
    console.log(this.server.status);
    console.log(this.changeSaved);
    console.log('-----------------');
    
    
    
    
    if((this.serverName!== this.server.name || this.serverStatus!== this.server.status) && !this.changeSaved){
      return confirm('Do you want to discard the changes ? ');

    }else{
      console.log('dddd');
      
      return true;
    }
  }
}
