// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'angular-post-comments';
// }


// src/app/app.component.ts

// import { Component } from '@angular/core';
// import { PostService, Post } from './post.service';
// import { CommentService, Comment } from './comment.service';

// @Component({
//   selector: 'app-root',
  
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   posts: Post[] = [];

//   constructor(private postService: PostService, private commentService: CommentService) {
//     this.postService.getPosts().subscribe(posts => {
//       this.posts = posts;
//     });
//   }

//   onAddComment(comment: Comment): void {
//     // This method is called when a comment is added in PostComponent
//     console.log('Comment added:', comment);
//     // Here you can implement logic to add the comment to the UI (not stored in this example)
//   }
// }


import { Component } from '@angular/core';
import { PostService, Post } from './post.service';
import { Comment } from './comment.service';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
@Component({
  selector: 'app-root',
  standalone:true,
  imports:[CommonModule,PostComponent,CommentComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[] = [];

  constructor(private postService: PostService) {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  // Method to handle when a comment is added in PostComponent
  onAddComment(comment: Comment): void {
    // const postToUpdate = this.posts.find(post => post.id === comment.postId);
    // if (postToUpdate) {
    //   if (!postToUpdate.comments) {
    //     postToUpdate.comments = []; // Initialize if undefined
    //   }
    //   // const updatedComments = [...postToUpdate.comments, comment];
    //   // postToUpdate.comments = updatedComments;
    //   postToUpdate.comments.push(comment);
    // }
  }
}
