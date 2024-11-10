import { Component, inject, OnInit } from '@angular/core';
import { Video } from '../Models/videos/video';
import { Observable } from 'rxjs';
import { VideoService } from '../services/video.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrl: './video-details.component.scss'
})
export class VideoDetailsComponent implements OnInit {

  constructor(private videoService: VideoService) { }

  router: Router = inject(Router);
  route: ActivatedRoute = inject(ActivatedRoute);
  id!: number;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
        this.video = this.videoService.getvideoById(Number(params.get("id")));
      })
  }


  video: Observable<Video|undefined> = new Observable()


}
