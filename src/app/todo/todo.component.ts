import { Component, OnInit } from '@angular/core';
import { DataService } from '../todoData.service';
import { Todo } from './todoData';

@Component({
  selector: 'app-post',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  //initialization
  public posts: Todo[] = [];
  public pagedPosts: Todo[] = [];
  public pageSize: number = 10;
  public currentPage: number = 1;
  public totalPages: number = 0;

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this._dataService.getData().subscribe(
      data => {
        this.posts = data;
        this.updatePagedPosts();
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }
  deletePost(postId: number): void {
    this.posts = this.posts.filter(post => post.id !== postId);
    this.updatePagedPosts();
  }
  
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
