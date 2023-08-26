import { Component, ElementRef, AfterViewInit } from '@angular/core';
import Atropos from 'atropos';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  
  

  constructor() {}

  ngOnInit() {
    
  }

  myAtropos = Atropos({
  el: '.my-atropos',
  activeOffset: 40,
  shadowScale: 1.05,
  onEnter() {
    console.log('Enter');
  },
  onLeave() {
    console.log('Leave');
  },
  onRotate(x, y) {
    console.log('Rotate', x, y);
  }
});
  
}


