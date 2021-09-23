import { Component, HostListener } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'extraNew';
  latitude = 51.678418;
longitude = 7.809007;

  

  ngOnInit(){
    AOS.init(); 
   }
    header_variable = true;
    @HostListener("document:scroll")
    scrollfunction(){
      if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
      this.header_variable=true;
      else{
        this.header_variable = false
      }
    }

}
