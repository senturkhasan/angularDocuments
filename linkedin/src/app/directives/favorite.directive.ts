import { Directive,Host,HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[myFavorite]'
})
export class FavoriteDirective {
  
  @HostBinding('class.is-favorite') isFavorite =true;

  @HostBinding('class.is-favorite-hovering') hovering =false;

  @HostListener('mauseenter') onMauseEnter(){
    this.hovering=true;
  }
  @HostListener('mauseleave') onMauseLeave(){
    this.hovering=false;
  }

  @Input() set myFavorite(value: boolean){
    this.isFavorite=value;
  }

  constructor() { }


}
