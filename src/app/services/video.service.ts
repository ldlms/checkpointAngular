import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Video } from '../Models/videos/video';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private VideoJsonUrl = "../assets/jsons/data.json"

  constructor(private http: HttpClient) { }

  getVideoList(): Observable<Video[]> {
    return this.http.get<{videos: Video[]}>(this.VideoJsonUrl).pipe(
      map(response => { 
        return response.videos;
      })
    );
  }

  getvideoById(id: number): Observable<Video | undefined> {
    return this.http.get<{videos: Video[]}>(this.VideoJsonUrl).pipe(
      map(response => response.videos.find(v => (v.id === id)))
    );
  }

  getvideoByFilter(filter: string): Observable<Video[]> {
    return this.http.get<{videos: Video[]}>(this.VideoJsonUrl).pipe(
      map(response => response.videos.filter(v => (v.title.includes(filter))))
    );
  }
}
