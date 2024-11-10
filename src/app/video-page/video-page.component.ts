import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrl: './video-page.component.scss'
})
export class VideoPageComponent {

  searchQuery:string = "" 

  searchUpdated(search:string):void{
    this.searchQuery = search;
  }


}
