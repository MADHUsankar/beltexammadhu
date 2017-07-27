import { Pipe, PipeTransform } from '@angular/core';
import { Survey } from './survey/survey';

@Pipe({
  name: 'filter',
   pure:false
})
export class FilterPipe implements PipeTransform {
   transform(survey_array: Array<Survey>, searchStr: string): Array<Survey> {
      // if((searchStr=null))
      //   {
      //     searchStr = ""
      //   }
      //   else{
      
      //   }

        searchStr=searchStr.toLowerCase();
      return survey_array.filter(survey => {
        return survey.userName.toLowerCase().includes(searchStr) || survey.question.toLowerCase().includes(searchStr)
      })
    }

  }
