import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ToolbarComponent,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('drawer') drawer: MatSidenav | undefined;
  title = 'Japan-Trip';
  routeList = [
    {
      name: 'Daily Schedule',
      path: 'daily-schedule',
      icon: 'home',
    },
    {
      name: 'Tournament schedule',
      path: 'tournament-schedule',
      icon: 'info',
    },
    {
      name: 'Things to Do',
      path: 'things-to-do',
      icon: 'contacts',
    },
  ];

  toggleSideNav() {
    this.drawer?.toggle();
  }
}
