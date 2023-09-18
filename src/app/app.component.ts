import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    RouterModule,
    MatIconModule,
  ],
  template: `<mat-toolbar color="primary">
      <mat-icon>pets</mat-icon>
      <h1 class="title mat-display-4" routerLink="/breed/list">Doggies</h1>
    </mat-toolbar>
    <router-outlet></router-outlet> `,
  styles: [
    `
      .title {
        cursor: pointer;
        font-size: 2.5rem;
        margin-left: 1rem;
      }
    `,
  ],
})
export class AppComponent {
  title = 'doggies';
}
