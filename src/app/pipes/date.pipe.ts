import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';

@Pipe({
  name: 'showDate'
})
export class ShowDatePipe implements PipeTransform {
  transform(value: any): any {
    const utcDate = moment.utc(value);
    const utcDate2 = new Date(utcDate.format());
    const datePipe = new DatePipe('en');
    value = datePipe.transform(utcDate2, 'dd MMM yyyy hh:mm a');
    return value;
  }

}
