import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: any = null;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    const postId = +this.route.snapshot.paramMap.get('id')!;
    this.http.get<any>('assets/mocks/posts.json').subscribe(data => {
      this.post = data.posts.find((p: any) => p.id === postId);
      if (!this.post) {
        console.error('Post not found with ID:', postId); 
      }
    });
  }
}