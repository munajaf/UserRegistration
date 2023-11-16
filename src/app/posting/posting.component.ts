import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IPost } from './data';

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
