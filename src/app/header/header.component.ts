import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { DownloadPopupComponent } from '../download-popup/download-popup.component';
// import { OwlOptions } from 'ngx-owl-carousel-o';
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

  constructor(public dialog: MatDialog) { }

  openModel(): void {
    const dialogRef = this.dialog.open(DownloadPopupComponent, {
      width: '550px',
      height:'350px',
      panelClass:'custom-dialog-container'
      
    });
    

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }
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
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay:true,
    autoplayTimeout:2200,
    dots: true,
    navSpeed: 1000,
    margin:10,
    navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>' ],
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
  customOptions2: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay:true,
    autoplayTimeout:5000,
        autoplayHoverPause:true,
    dots: true,
    navSpeed: 100,
    navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
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
    nav: true
  }
  customOptions3: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay:true,
    autoplayTimeout:1500,
    // autoplayHoverPause:false,
    dots: false,
    navText:['',''],
    margin:30,
    smartSpeed: 500,
    navSpeed: 800,
    items:1,

    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      }
    },
    nav: false
  }
  slides = [
    {id: 1, img: "https://dummyimage.com/350x150/423b42/fff"},
    {id: 2, img: "https://dummyimage.com/350x150/2a2b7a/fff"},
    {id: 3, img: "https://dummyimage.com/350x150/1a2b7a/fff"},
    {id: 4, img: "https://dummyimage.com/350x150/7a2b7a/fff"},
    {id: 5, img: "https://dummyimage.com/350x150/9a2b7a/fff"},
    {id: 6, img: "https://dummyimage.com/350x150/5a2b7a/fff"},
    {id: 6, img: "https://dummyimage.com/350x150/4a2b7a/fff"}
  ];

}