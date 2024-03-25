import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
  ]
})
export class ServerComponent implements OnInit {

  server:{id:number,name:string,status:string};
  constructor(private serverService:ServersService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.server=this.serverService.getServer(1) !;
    this.route.params
      .subscribe(
        (params:Params)=>{
          this.server=this.serverService.getServer(+params['id']) !;
        }
      )
  }

}
