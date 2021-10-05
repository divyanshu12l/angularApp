import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
// import { OwlOptions } from 'ngx-owl-carousel-o';
import {BrowserModule} from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pan1Component } from './pan1/pan1.component';
import { Pan2Component } from './pan2/pan2.component';
import { Pan3Component } from './pan3/pan3.component';
import { Pan4Component } from './pan4/pan4.component';
import { Pan5Component } from './pan5/pan5.component';
import {AgmCoreModule} from '@agm/core';
import { Pan6Component } from './pan6/pan6.component';
import { Pan7Component } from './pan7/pan7.component';
import { Pan8Component } from './pan8/pan8.component';
import { Pan9Component } from './pan9/pan9.component';
import {FormsModule} from '@angular/forms'
import { Pan10Component } from './pan10/pan10.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';
import { ExpertAnalysisComponent } from './expert-analysis/expert-analysis.component';
import { RTMatchAnalysisComponent } from './rtmatch-analysis/rtmatch-analysis.component';
import { RTPractiseAnalysisComponent } from './rtpractise-analysis/rtpractise-analysis.component';
import { AthleteProfilingComponent } from './athlete-profiling/athlete-profiling.component';
import { CreativeMediaComponent } from './creative-media/creative-media.component';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';

// import '@types/googlemaps';

// declare global {
//     interface Window {
//         google: typeof google;
//     }
// }

@NgModule({
  declarations: [
    AppComponent,
    Pan1Component,
    Pan2Component,
    Pan3Component,
    Pan4Component,
    Pan5Component,
    Pan6Component,
    Pan7Component,
    Pan8Component,
    Pan9Component,
    Pan10Component,
    AboutUsComponent,
    ContactUsComponent,
    HeaderComponent,
    NewsComponent,
    ExpertAnalysisComponent,
    RTMatchAnalysisComponent,
    RTPractiseAnalysisComponent,
    AthleteProfilingComponent,
    CreativeMediaComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    LoadingBarModule,
    LoadingBarRouterModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyDjngAJCeHZT7QPmfmXWtgKRdC0baTyPiY'	
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
