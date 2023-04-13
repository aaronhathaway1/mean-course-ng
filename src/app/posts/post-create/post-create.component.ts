import { Component } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './post-create.component.html',
})
export class PostCreateComponent {
  newPost = 'NO CONTENT';
  ngOnInit() {}

  onAddPost() {
    // this.newPost = "The user's post";
    this.newPost = "The user's post";
  }
}
