import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-pan1',
  templateUrl: './pan1.component.html',
  styleUrls: ['./pan1.component.css']
})
export class Pan1Component implements OnInit {
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

}
