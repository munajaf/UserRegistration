import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostIdService {
  selectedPostId: number = 0;

  setSelectedPostId(id: number): void {
    this.selectedPostId = id;
  }
}
