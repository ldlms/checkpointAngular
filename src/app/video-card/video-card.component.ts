import { Component, inject, Input, input } from '@angular/core';
import { Video } from '../Models/videos/video';
import { Comments } from '../Models/comments/comments';
import { Router } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-video-card',
  standalone:true,
  imports:[NgStyle],
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.scss'
})
export class VideoCardComponent {

  @Input() videoId:number = 0
  @Input() videoTitle:string =""
  @Input() videoUrl:string = ""
  @Input() videoComments:Comments[] = []
  @Input() videoChannel:string =""
  @Input() videoLikes:number = 0
  router: Router = inject(Router);



  goToVideo(videoId:number):void{
    this.router.navigate(['/video', videoId]);
  }
}
