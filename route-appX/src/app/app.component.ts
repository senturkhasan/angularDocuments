import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html' 
})
export class AppComponent implements AfterViewInit {
  title = 'route-appX';
  constructor(private router:Router){

  }


  @ViewChild(ChildComponent,{static:true}) child ?:ChildComponent;

  @ViewChild('button',{static:true})buttonRef?:ElementRef<HTMLButtonElement>;

  @ViewChildren(ChildComponent) children ?: QueryList<ChildComponent>;

  @ViewChildren('button') buttonsRef ?: QueryList<ElementRef<HTMLButtonElement>>;


  ngAfterViewInit(): void {
    if(this.buttonRef?.nativeElement){
      this.buttonRef.nativeElement.innerHTML='FOO';
    }

    this.children?.forEach(child=>console.log('child ::',child));
    this.buttonsRef?.forEach(button=>console.log('button ::',button));
  }

  pizza=0;
  burger=0;
  totaItems:number =0;

  goToContact(){
    this.router.navigate(['contact']);
  }

  burgerChanged(count:number){
    this.burger=  count;
    this.calculatedTotalItems();
  }

  pizzaChanged(count:number){
    this.pizza= count;
    this.calculatedTotalItems();
  }

  calculatedTotalItems(){
    this.totaItems=this.burger + this.pizza;
  }


  items :any[] =[
    'elma','armut'
  ]
  addItem(newItem:string) {
    this.items.push(newItem);
  }

  increment(){
    console.log(this.child);
    this.child?.increment();
    
  }

}
