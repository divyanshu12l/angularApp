import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import { OwlOptions } from 'ngx-owl-carousel-o';
import { cont} from 'src/app/news/news.component'

import Swiper from 'swiper';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  OnScoll= false;
  userData:any = {};
  email = 'divyanshulingwal35@gmail.com'
  password = "div12345@@"

  constructor() { }
  scrollHandler(condition: any){
    condition = true;
  }
  ngOnInit(): void {
  }
  Input(data:NgForm){
    this.userData = data.getFormGroup
    if (this.userData.password == this.password)
    if (this.userData.email == this.email)
      console.warn(data)
    else (console.warn('not Working'))

  }
  customOptions: OwlOptions = {
    mouseDrag: true,
    loop:true,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    autoplay: true,
    navSpeed: 700,
    margin:2,
    navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
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