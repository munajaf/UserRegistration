import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { IPost } from '../posting/data';
import { Router } from '@angular/router';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  public post!: IPost;
  public isLoading: boolean = true;
  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) {}
  ngOnInit() {
    const postIdParam = this.route.snapshot.paramMap.get('id');
    if (postIdParam !== null) {
      const postId = +postIdParam;
      this.isLoading = true;
      this.dataService.getDataPost(postId).subscribe(
        (data: IPost) => {
          this.post = data;
          this.isLoading = false;
        },
        error => {
          console.error('Error fetching data:', error);
          this.isLoading = false;
        }
      );
    } else {
      console.error('Post ID is null.');
      this.isLoading = false;
    }
  }
  returnPage() {
    this.router.navigate(['/post']);
  }
}
