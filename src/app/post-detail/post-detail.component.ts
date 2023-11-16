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
  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) {}
  ngOnInit() {
    const postIdParam = this.route.snapshot.paramMap.get('id');
    if (postIdParam !== null) {
      const postId = +postIdParam; 
      this.dataService.getData().subscribe(
        (data: IPost[]) => {
          this.post = data.find(post => post.id === postId)!;
        },
        error => {
          console.error('Error fetching data:', error);
        }
      );
    } else {
      console.error('Post ID is null.');
    }
  }
  returnPage() {
    this.router.navigate(['/post']);
  }
}
