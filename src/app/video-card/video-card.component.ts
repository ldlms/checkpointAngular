import { Component, Input, input } from '@angular/core';
import { Video } from '../Models/videos/video';
import { Comments } from '../Models/comments/comments';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.scss'
})
export class VideoCardComponent {

  @Input() videoTitle:string =""
  @Input() videoUrl:string = ""
  @Input() videoComments:Comments[] = []
}
