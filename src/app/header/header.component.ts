import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
// import { OwlOptions } from 'ngx-owl-carousel-o';
import { cont} from 'src/app/news/news.component';
import Swiper from 'swiper';
import { MatDialog } from '@angular/material/dialog';
import { DownloadPopupComponent } from '../download-popup/download-popup.component';
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
    dots: true,
    navSpeed: 700,
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
    dots: true,
    navSpeed: 800,
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

}