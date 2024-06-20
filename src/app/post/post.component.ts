// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-post',
//   standalone: true,
//   imports: [],
//   templateUrl: './post.component.html',
//   styleUrl: './post.component.css'
// })
// export class PostComponent {

// }


// src/app/post/post.component.ts



















// import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { Post } from '../post.service';
// import { CommentService, Comment } from '../comment.service';
// import { CommonModule } from '@angular/common';
// @Component({
//   selector: 'app-post',
//   standalone:true,
//   imports:[CommonModule],
//   templateUrl: './post.component.html',
//   styleUrls: ['./post.component.css']
// })
// export class PostComponent {
//   @Input() post!: Post;
//   comments: Comment[] = [];

//   constructor(private commentService: CommentService) {
//     this.commentService.getComments().subscribe(comments => {
//       this.comments = comments.filter(comment => comment.postId === this.post.id);
//     });
//   }
  
//   addComment(): void {
//     // Example of adding a comment (not stored anywhere)
//     const newComment: Comment = {
//       postId: this.post.id,
//       id: Math.floor(Math.random() * 1000) + 1, // Generate random ID (not realistic in real app)
//       name: 'User',
//       email: 'user@example.com',
//       body: 'New comment added!'
//     };
//     this.comments.push(newComment);
//     // Emit event to parent (AppComponent) to notify about the added comment
//     this.addCommentEvent.emit(newComment);
//   }

//   @Output() addCommentEvent = new EventEmitter<Comment>();
// }



























import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post.service';
import { Comment, CommentService } from '../comment.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-post',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post!: Post;
  comments: Comment[] = [];
  newCommentBody: string = ''; // To hold the input value for new comment

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.commentService.getCommentsByPostId(this.post.id!).subscribe(comments => {
      this.comments = comments;
    });
  }

  addComment(): void {
    const newComment: Comment = {
      postId: this.post.id!,
      id: Math.floor(Math.random() * 1000) + 1,
      name: 'NewComment', // Hardcoded for simplicity
      email: 'user@example.com', // Hardcoded for simplicity
      body: this.newCommentBody
    };
    this.comments.push(newComment);
    this.newCommentBody = ''; // Clear input field after adding comment
  }
}
