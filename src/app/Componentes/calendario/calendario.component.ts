import { Component, OnInit } from '@angular/core';
import Calendar from 'tui-calendar'; /* ES6 */
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  today: Date = new Date();
  pipe = new DatePipe('es');
  hoyPipe: any;
  fechaHoy="";
  calendar: any;
  constructor() { }
  
  ngOnInit(): void {
    this.hoyPipe = this.pipe.transform(Date.now(), 'MMMM yyyy');
    this.fechaHoy=this.hoyPipe;
    this.fechaHoy=this.fechaHoy.substring(0, 1).toUpperCase() + this.fechaHoy.substring(1).toLocaleLowerCase() ;
    this.iniciaCalendario();
  }
  
  iniciaCalendario():void {
    var COMMON_CUSTOM_THEME = {
      'common.border': '1px solid #00ADB5',
      'common.backgroundColor': '#EEEEEE',
      'common.holiday.color': '#f54f3d',
      'common.saturday.color': '#3162ea',
      'common.dayname.color': '#393E46'
    }

    this.calendar = new Calendar('#calendar', {
      defaultView: 'month',
      theme: COMMON_CUSTOM_THEME,
      taskView: true,
      template: {
        monthDayname: function(dayname) {
          return '<span class="calendar-week-dayname-name">' + dayname.label + '</span>';
        }
      }
    });
  }

  crearHorario():void{
    this.calendar.createSchedules([
      {
          id: '1',
          calendarId: '1',
          title: 'my schedule',
          category: 'time',
          dueDateClass: '',
          start: '2022-06-18T22:30:00+09:00',
          end: '2022-06-19T02:30:00+09:00'
      }
    ]);
  }


}

