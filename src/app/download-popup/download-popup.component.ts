import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog"
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-download-popup',
  templateUrl: './download-popup.component.html',
  styleUrls: ['./download-popup.component.css']
})
export class DownloadPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DownloadPopupComponent>) { }

  ngOnInit(): void {
  }
  closeModel(): void {
    console.warn('this is not working')
    this.dialogRef.close();
  }

}
