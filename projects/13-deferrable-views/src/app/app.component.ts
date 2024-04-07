import { Component } from '@angular/core';
import { PostsComponent } from './posts/posts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostsComponent],
  template: `
    <section class="container">
      <h1>Deferrable Views Example</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maxime in nostrum? Corporis ex possimus blanditiis amet similique quo recusandae atque, eligendi veritatis magni veniam vitae. Veritatis sunt nesciunt laborum?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maxime in nostrum? Corporis ex possimus blanditiis amet similique quo recusandae atque, eligendi veritatis magni veniam vitae. Veritatis sunt nesciunt laborum?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maxime in nostrum? Corporis ex possimus blanditiis amet similique quo recusandae atque, eligendi veritatis magni veniam vitae. Veritatis sunt nesciunt laborum?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maxime in nostrum? Corporis ex possimus blanditiis amet similique quo recusandae atque, eligendi veritatis magni veniam vitae. Veritatis sunt nesciunt laborum?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maxime in nostrum? Corporis ex possimus blanditiis amet similique quo recusandae atque, eligendi veritatis magni veniam vitae. Veritatis sunt nesciunt laborum?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maxime in nostrum? Corporis ex possimus blanditiis amet similique quo recusandae atque, eligendi veritatis magni veniam vitae. Veritatis sunt nesciunt laborum?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maxime in nostrum? Corporis ex possimus blanditiis amet similique quo recusandae atque, eligendi veritatis magni veniam vitae. Veritatis sunt nesciunt laborum?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maxime in nostrum? Corporis ex possimus blanditiis amet similique quo recusandae atque, eligendi veritatis magni veniam vitae. Veritatis sunt nesciunt laborum?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maxime in nostrum? Corporis ex possimus blanditiis amet similique quo recusandae atque, eligendi veritatis magni veniam vitae. Veritatis sunt nesciunt laborum?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maxime in nostrum? Corporis ex possimus blanditiis amet similique quo recusandae atque, eligendi veritatis magni veniam vitae. Veritatis sunt nesciunt laborum?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maxime in nostrum? Corporis ex possimus blanditiis amet similique quo recusandae atque, eligendi veritatis magni veniam vitae. Veritatis sunt nesciunt laborum?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maxime in nostrum? Corporis ex possimus blanditiis amet similique quo recusandae atque, eligendi veritatis magni veniam vitae. Veritatis sunt nesciunt laborum?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maxime in nostrum? Corporis ex possimus blanditiis amet similique quo recusandae atque, eligendi veritatis magni veniam vitae. Veritatis sunt nesciunt laborum?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maxime in nostrum? Corporis ex possimus blanditiis amet similique quo recusandae atque, eligendi veritatis magni veniam vitae. Veritatis sunt nesciunt laborum?</p>
      <button #loadPosts>Load Posts</button>
      @defer(on viewport) {
      <app-posts />
      } @loading (minimum 2s) {
      <p>Loading...</p>
      } @error {
        <p>Error!</p>
      } @placeholder {
        <p>Posts..</p>
      }
    </section>
  `,
})
export class AppComponent {}
