import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts: any[] = [];

  constructor(private router: Router, private http: HttpClient, public translate: TranslateService) {}

  ngOnInit(): void {
    this.http.get<any>('assets/mocks/posts.json').subscribe(data => {
      this.posts = data.posts;
      console.log(this.posts)
    });
    console.log(this.translate.currentLang);
  }

  viewPostDetails(postId: number) {
    this.router.navigate(['/blog', postId]);
  }
}