// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-comment',
//   standalone: true,
//   imports: [],
//   templateUrl: './comment.component.html',
//   styleUrl: './comment.component.css'
// })
// export class CommentComponent {

// }


// src/app/comment/comment.component.ts

import { Component, Input } from '@angular/core';
import { Comment } from '../comment.service';

@Component({
  selector: 'app-comment',
  standalone:true,
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input() comment!: Comment;
}
