import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <article>
      <h1>Blog Post</h1>
      <section>
        <label for="title">Post Title</label>
        <!-- add the input -->
        <input type="text" id="title" [(ngModel)]="title" />

        <label for="body">Post Body</label>
        <!-- add the textarea -->
        <textarea
          name="body"
          id="body"
          cols="30"
          rows="10"
          [(ngModel)]="body"
        ></textarea>
      </section>
      <section>
        <p>{{title}}</p>
        <p>{{body}}</p>
      </section>
    </article>
  `,
  imports: [FormsModule],
})
export class AppComponent {
  title = '09-template-driven-forms';
  body = 'Body text';
}
