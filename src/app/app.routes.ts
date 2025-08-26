import { Routes } from '@angular/router';
import { DailyScheduleComponent } from './daily-schedule/daily-schedule.component';
import { ThingsToDoComponent } from './things-to-do/things-to-do.component';
import { TournamentScheduleComponent } from './tournament-schedule/tournament-schedule.component';

export const routes: Routes = [
  {
    path: '',
    component: DailyScheduleComponent,
  },
  {
    path: 'daily-schedule',
    component: DailyScheduleComponent,
  },
  {
    path: 'tournament-schedule',
    component: TournamentScheduleComponent,
  },
  {
    path: 'things-to-do',
    component: ThingsToDoComponent,
  },
  { path: '**', component: DailyScheduleComponent },
];
