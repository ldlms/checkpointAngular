import { Component, OnInit } from '@angular/core';
import { Video } from '../Models/videos/video';
import { VideoService } from '../services/video.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.scss'
})
export class VideoListComponent implements OnInit {

  constructor(private videoService: VideoService){}

  videos:Observable<Video[]> = new Observable();

  ngOnInit(): void {
    this.videos = this.videoService.getVideoList();
    console.log(this.videos);
  }
}
