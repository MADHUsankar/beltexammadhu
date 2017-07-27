import { AppComponent } from './app.component';
 import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyComponent } from './survey/survey.component';
import { CreateComponent } from './survey/create/create.component';
import { ListComponent } from './survey/list/list.component';
import { LoginComponent } from './survey/login/login.component';
import { PollComponent } from './survey/poll/poll.component';
import { SurveyService } from './survey/survey.service';




const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "list", component: ListComponent },
   { path: "create", component: CreateComponent },
    { path: "poll/:_id", component: PollComponent },
  { path: "", pathMatch: "full", redirectTo: "/"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
