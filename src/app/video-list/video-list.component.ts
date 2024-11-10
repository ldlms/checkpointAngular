import { Component, inject, OnInit } from '@angular/core';
import { Video } from '../Models/videos/video';
import { VideoService } from '../services/video.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.scss'
})
export class VideoListComponent implements OnInit {

  constructor(private videoService: VideoService){}

  videos:Observable<Video[]> = new Observable();
  router: Router = inject(Router);

  ngOnInit(): void {
    this.videos = this.videoService.getVideoList();
    console.log(this.videos);
  }

  goToVideo(id:number):void{
    this.router.navigate(['/video', id]);
  }
}
