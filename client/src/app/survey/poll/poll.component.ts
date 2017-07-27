import { Component, OnInit } from '@angular/core';
import { Survey } from '../survey';
import { SurveyService } from './../survey.service';
import { SurveyComponent } from './../survey.component';
import { Router, ActivatedRoute} from "@angular/router"
import { Account } from '../survey';
@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
// @Input() surveys: Array<Survey>;
  survey: Survey;
  editSurvey: Survey;
account: Account = new Account("");
  constructor(private _route: ActivatedRoute,private _surveyComponent: SurveyComponent,
    private _surveyService: SurveyService, private router:Router) { 
    //       this._route.params.subscribe((param)=>{
    //   this.survey = param._id
    // })
    }

  ngOnInit() {
    this.survey = this._surveyComponent.selectedSurvey; // local ptr to selectedSurvey
  }

  onVoteButton(selection: number) {
    console.log("on vote")
    this.editSurvey = new Survey("","");
    Object.assign(this.editSurvey, this.survey);
    switch(selection) {
      case 1: this.editSurvey.vote1++; break;
      case 2: this.editSurvey.vote2++; break;
      case 3: this.editSurvey.vote3++; break;
      case 4: this.editSurvey.vote4++; break;
      default:
    }
     this.update(this.survey, this.editSurvey);
    // this._surveyComponent.onSelectList(); // return to list vi
    // this.update(this.survey, this.editSurvey);
    // this._surveyComponent.selectedSurvey = this.survey;
    // this._surveyService.show(this.survey)
    //   .then(
    //     (survey) => { this.survey = survey; })
    // .catch((err) => { console.log(err); });

    

    }
    update(originalSurvey: Survey, editSurvey: Survey){
    console.log("updating survey", originalSurvey.question, originalSurvey.option1,originalSurvey.option2,originalSurvey.option3,originalSurvey.option4);
    this._surveyService.update(originalSurvey, editSurvey)
    .then(response => this.show(editSurvey))
    .catch(err => console.log(err));
  }

    show(editSurvey: Survey){
    console.log("showing survey poll ts", editSurvey.question);
    this._surveyService.show(editSurvey)
    .then((survey) => { 
      console.log("after db", survey)
      this.survey = survey; })
    .catch(err => console.log(err));
  }
    // ?this._surveyComponent.onSelectPoll(); // return to list view
    // this.router.navigate(['list']);
  // update(originalSurvey: Survey, editSurvey: Survey){
  //   console.log("updating survey", originalSurvey.question, originalSurvey.option1,originalSurvey.option2,originalSurvey.option3,originalSurvey.option4);
  //   this._surveyService.update(originalSurvey, editSurvey)
  //   .then(response => this.index())
  //   .catch(err => console.log(err));
  // }
  }

  

 
