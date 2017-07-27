import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing';

import { AppComponent } from './app.component';
 
import { SurveyComponent } from './survey/survey.component';
import { CreateComponent } from './survey/create/create.component';
import { ListComponent } from './survey/list/list.component';
import { LoginComponent } from './survey/login/login.component';
import { PollComponent } from './survey/poll/poll.component';
import { SurveyService } from './survey/survey.service';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,    
    SurveyComponent,    
    CreateComponent,
    ListComponent,
    LoginComponent,
    PollComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,AppRoutingModule
  ],
  providers: [SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
