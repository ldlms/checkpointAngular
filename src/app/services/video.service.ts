import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Video } from '../Models/videos/video';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  

  private VideoJsonUrl = "src/assets/jsons/data.json"

  constructor(private http: HttpClient) { }

  getVideoList(): Observable<Video[]>{
    return this.http.get<Video[]>(this.VideoJsonUrl).pipe(
      map(video => video.map(video => ({...video})))
    );
  }

  getvideoById(id:number):Observable<Video|undefined>{
    return this.http.get<Video[]>(this.VideoJsonUrl).pipe(
      map(video => video.find(video => (video.id === id)))
    );
  }

  getBideoByFilter(filter:string):Observable<Video[]|undefined>{
    return this.http.get<Video[]>(this.VideoJsonUrl).pipe(
      map(video => video.filter(video => (video.title.includes(filter))))
    );
  }
}
