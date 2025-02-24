import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  posts = [
    { title: 'Post 1', content: 'Conteúdo do post 1...', date: '2023-10-01' },
    { title: 'Post 2', content: 'Conteúdo do post 2...', date: '2023-10-05' },
  ];
}