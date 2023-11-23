import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IPost } from './data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.css']
})
export class PostingComponent implements OnInit {

  //initialization
  public posts: IPost[] = [];
  public pagedPosts: IPost[] = [];
  public pageSize: number = 10;
  public currentPage: number = 1;
  public totalPages: number = 0;
  public isLoading: boolean = true;

  constructor(private _dataService: DataService, private router: Router) {}  

  onViewClick(postId: number): void {
    this._dataService.getDataPost(postId).subscribe();
    this.router.navigate(['/post', postId]);
  }
  ngOnInit() {
    this.isLoading = true;
    this._dataService.getData().subscribe(
      data => {
        this.posts = data;
        this.updatePagedPosts();
        this.isLoading = false;
      },
      error => {
        console.error('Error fetching data:', error);
        this.isLoading = false;
      }
    );
  }
  //pagination
  updatePagedPosts() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.totalPages = Math.ceil(this.posts.length / this.pageSize);
    this.pagedPosts = this.posts.slice(startIndex, startIndex + this.pageSize);
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagedPosts();
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagedPosts();
    }
  }
}
