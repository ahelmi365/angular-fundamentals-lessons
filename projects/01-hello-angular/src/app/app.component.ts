import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>If you are reading this...</h1>
    <p>Things have worked out well! 🎉</p>
    <h2>Hello {{ userName }}</h2>
    <ol>
      <li class="item">JavaScript</li>
      <li class="item">TypeScript</li>
      <li class="item">React</li>
    </ol>
  `,
  styles: `
  ol{
    list-style-type: upper-roman;
  }`,
})
export class AppComponent {
  userName: string = 'Ali Helmi';
}
