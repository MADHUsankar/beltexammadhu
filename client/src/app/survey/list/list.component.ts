import { Component, OnInit, Input } from '@angular/core';
import { Survey } from '../survey';
import { SurveyService } from './../survey.service';
import { SurveyComponent } from './../survey.component';
import {Router} from "@angular/router" 
import { Account } from '../survey';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
// @Input() surveys: Array<Survey>;
 @Input() currentUserName: string;
 account: Account = new Account("");
  surveys: Array<Survey>;
 searchStr=""
  constructor(private _surveyComponent: SurveyComponent,
    private _surveyService: SurveyService,private router:Router) { }

  ngOnInit() {
    this.surveys = this._surveyComponent.surveys;
      this.index();
    // this._surveyComponent.onSelectPoll();
  }
  
    index(){   // get full surveys list
      console.log("listco.ts delete index")
    this._surveyService.index()
    .then(data => {
      this.surveys = data;
    })
    .catch(err => console.log(err));
  }
 onLogout() {
    this._surveyComponent.logout();
    this.account.userName = "";
  }
  onSelectButton(survey: Survey) {
    this._surveyComponent.selectedSurvey = survey;
    // this.router.navigate(['/poll', survey._id]);
    // this.index()
    this._surveyComponent.onSelectPoll();
    // this._surveyComponent.index();
  }

  onDeleteButton(survey: Survey) {
    this.delete(survey);
  }

    delete(survey: Survey){
    console.log("deleting survey com", survey.question);
    this._surveyService.delete(survey)
    .then( response => {
      console.log("then")
      this.index()
    })
    .catch(err => console.log(err));
  }
   

}
