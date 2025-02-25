import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  posts = [
    { 
      id: 1, 
      title: 'Post 1', 
      content: 'Conteúdo do post 1...', 
      date: '2023-10-01', 
      image: '../assets/jababack.jpg' 
    },
    { 
      id: 2, 
      title: 'Post 2', 
      content: 'Conteúdo do post 2...', 
      date: '2023-10-05', 
      image: '../assets/jababack.jpg'
    },

  ];

  constructor(private router: Router) {}

  viewPostDetails(postId: number) {
    this.router.navigate(['/blog', postId]);
  }
}