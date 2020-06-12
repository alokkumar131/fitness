import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-scroll-arrow',
  templateUrl: './scroll-arrow.component.html',
  styleUrls: ['./scroll-arrow.component.css']
})
export class ScrollArrowComponent  {

//   scrollPosition: number;

//   @ViewChild('scrollFab') scrollRef:ElementRef

//   constructor() { }
//   ngOnInit() {
//     window.addEventListener('scroll', this.scroll, true); //third parameter
// }

// ngOnDestroy() {
//     window.removeEventListener('scroll', this.scroll, true);
// }

// scroll = (event): void => {
//     let scrollTop = event.target.scrollingElement.scrollTop;
//     this.scrollPosition = scrollTop;

// if(scrollTop >= 400){
//   this.scrollRef.nativeElement.className = 'containe show';
// }else {
//   this.scrollRef.nativeElement.className = 'containe hide';
// }


// }
}
