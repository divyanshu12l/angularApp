import { Component, OnInit } from '@angular/core';
// import { OwlOptions } from 'ngx-owl-carousel-o';
import Swiper from 'swiper';

@Component({
  selector: 'app-pan4',
  templateUrl: './pan4.component.html',
  styleUrls: ['./pan4.component.css']
})
export class Pan4Component implements OnInit {

  constructor() {
   
   }

  ngOnInit(): void {
  }
  customOptions: any = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    navSpeed: 500,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
