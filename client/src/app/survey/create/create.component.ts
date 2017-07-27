import { Component, OnInit } from '@angular/core';
import { Survey } from '../survey';
import { SurveyService } from './../survey.service';
import { SurveyComponent } from './../survey.component';
import {Router} from "@angular/router" 
import { Account } from '../survey';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
// @Input() surveys: Array<Survey>;
  surveys: Array<Survey>;
  newSurvey: Survey;
  account: Account = new Account("");

  constructor(private _surveyComponent: SurveyComponent,
    private _surveyService: SurveyService,private router:Router) { }

  ngOnInit() {
    this.surveys = this._surveyComponent.surveys;
    this.newSurvey = new Survey("", "");
         this._surveyComponent.index();
  }

  onCreateMade() {
    this.newSurvey.userName = this._surveyComponent.currentUserName;
    this._surveyComponent.create(this.newSurvey);
    this.newSurvey = new Survey("", "");
    // this.router.navigate(['list']);
      alert("Survey is added succesfully")
    this._surveyComponent.onSelectList(); // return to list view
     
     
  }
    onCancel() {
     console.log("cancel")
    this._surveyComponent.onSelectList(); // return to list view
     
     
  }
 onLogout() {
    this._surveyComponent.logout();
    this.account.userName = "";
  }
  //  index(){   // get full surveys list
  //     console.log("list.ts index")
  //   this._surveyService.index()
  //   .then(data => {
  //     this.surveys = data;
  //   })
  //   .catch(err => console.log(err));
  // }


  // create(survey: Survey){
  //   console.log("creating survey", survey.question);
  //   this._surveyService.create(survey)
  //   .then(response => {
  //      this.newSurvey = new Survey("", "");
  //       alert("Survey is added succesfully")
  //     this.index()
  //   })
  //   .catch(err => console.log(err));
  // }

}
