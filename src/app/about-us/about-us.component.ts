import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o'

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    mouseDrag: true,
    loop:true,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    margin:0,
    autoplay: true,
    nav:true,
    navSpeed: 600,
    navText: ["<div class='nav-btn prev-slide'><</div>", "<div class='nav-btn next-slide'>></div>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
  }


}
