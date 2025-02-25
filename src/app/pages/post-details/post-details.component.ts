import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogComponent } from '../blog/blog.component';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: any;

  constructor(private route: ActivatedRoute, private blogComponent: BlogComponent) {}

  ngOnInit(): void {
    let postId = +this.route.snapshot.paramMap.get('id')!;
    this.post = this.blogComponent.posts.find(p => p.id === postId);
    console.log("conteudo do post", this.post);
  }
}