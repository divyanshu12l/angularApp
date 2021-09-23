import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  cont =  document.getElementById("1stcard")

  constructor() { }

  ngOnInit(): void {
  }

}
export var cont: any 
