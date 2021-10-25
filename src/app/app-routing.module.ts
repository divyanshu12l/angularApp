import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';
import { AthleteProfilingComponent } from './athlete-profiling/athlete-profiling.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CreativeMediaComponent } from './creative-media/creative-media.component';
import { ExpertAnalysisComponent } from './expert-analysis/expert-analysis.component';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';
import { Pan1Component } from './pan1/pan1.component';
import { Pan10Component } from './pan10/pan10.component';
import { RTMatchAnalysisComponent } from './rtmatch-analysis/rtmatch-analysis.component';
import { RTPractiseAnalysisComponent } from './rtpractise-analysis/rtpractise-analysis.component';
import {ServiceComponent} from './service/service.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HeaderComponent},
  {path:'News', component:NewsComponent},
  {path: 'About', component: AboutUsComponent},
  {path: 'Contact', component: ContactUsComponent},
  {path: 'expert-analysis', component: ExpertAnalysisComponent},
  {path: 'real-time-match-analysis', component: RTMatchAnalysisComponent},
  {path: 'real-time-practise-analysis', component: RTPractiseAnalysisComponent},
  {path: 'athelete-profiling', component: AthleteProfilingComponent},
  {path: 'broadcast-creative-media', component: CreativeMediaComponent},
  {path: 'services', component: ServiceComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
