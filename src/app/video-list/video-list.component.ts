import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Video } from '../Models/videos/video';
import { VideoService } from '../services/video.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.scss'
})
export class VideoListComponent implements OnInit,OnChanges {

  constructor(private videoService: VideoService){}

  videos:Observable<Video[]> = new Observable();
  router: Router = inject(Router);
  @Input() searchendpoint:string = ""

  ngOnInit(): void {
    this.videos = this.videoService.getVideoList();

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.searchendpoint);
    if(changes['searchendpoint']){
      this.videos = this.videoService.getvideoByFilter(this.searchendpoint);
    }
  }

  goToVideo(id:number):void{
    this.router.navigate(['/video', id]);
  }
}
