
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  exampleText:String="Havalar Soğudu";

  eyeState:boolean=true;
  /*onsendBoxItem(boxItems:any){
    

  }*/
  serverElements=[{type:'server',name:'TestServer',content:'Just a test!'}];



  onServerAdded(serverData:{serverName:string,serverContent:string}){
    this.serverElements.push({
      type:'server',
      name:serverData.serverName,
      content:serverData.serverContent
    })
  }
  onBlueprintAdded(bluePrintData:{serverName:string,serverContent:string}){
    this.serverElements.push({
      type:'blueprint',
      name:bluePrintData.serverName,
      content:bluePrintData.serverContent
    })
  }
  onChangeFirst(){
    this.serverElements[0].name='Changed';

  }
  onDestroyFirst(){
    this.serverElements.splice(0,1);
  }



 
}
