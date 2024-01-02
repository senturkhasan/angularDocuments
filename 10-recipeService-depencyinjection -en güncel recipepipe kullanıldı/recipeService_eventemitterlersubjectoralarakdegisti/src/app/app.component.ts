import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipeService_';

  loadedFeature="recipe";
  onNavigate(feature: string){
    console.log("comopenent : "+feature);
    
    this.loadedFeature=feature;
  }
}
