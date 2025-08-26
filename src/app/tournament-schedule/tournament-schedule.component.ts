import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'tournament-schedule',
  imports: [MatButtonModule, MatCardModule, MatIconModule, MatListModule],
  templateUrl: './tournament-schedule.component.html',
  styleUrl: './tournament-schedule.component.scss',
})
export class TournamentScheduleComponent {}
