import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <article>
      <h1>Blog Post</h1>
      <form
        name="blogForm"
        [formGroup]="blogForm"
        (ngSubmit)="handleFormSubmit()"
      >
        <section>
          <label for="title">Post Title</label>
          <input type="text" id="title" formControlName="title" />

          <label for="body">Post Body</label>
          <textarea
            name=""
            id="body"
            cols="30"
            rows="10"
            formControlName="body"
          ></textarea>
        </section>
        <button type="submit" [disabled]="!blogForm.valid">Submit Post</button>
      </form>
    </article>
  `,
  styles: [],
})
export class AppComponent {
  handleFormSubmit() {
    console.log("form is submitted")
    console.log(this.blogForm.value);
    const {title, body} = this.blogForm.value
    this.postBlog(title, body);
  }
  blogForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
  });

  postBlog(title: string | null | undefined, body: string | null | undefined) {
    console.log(`Posting blog titles ${title}, with the contents ${body}.`);
  }
}
