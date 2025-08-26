import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'things-to-do',
  imports: [MatButtonModule, MatCardModule, MatIconModule, MatListModule],
  templateUrl: './things-to-do.component.html',
  styleUrl: './things-to-do.component.scss',
})
export class ThingsToDoComponent {}
