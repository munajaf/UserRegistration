import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IPost } from './data';

@Component({
  selector: 'app-post',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.css']
})
export class PostingComponent implements OnInit {

  public posts: IPost[] = [];

  constructor(private _dataService: DataService){}

  ngOnInit() {
    this._dataService.getData().subscribe(
      data => {
        this.posts = data;
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }
  viewPost(post: IPost) {
    // Implement your logic for handling the view action
    console.log('View post:', post);
    // You can navigate to a detailed view or show a modal, etc.
  }
}
