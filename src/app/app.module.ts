import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoPageComponent } from './video-page/video-page.component';
import { VideoComponent } from './video/video.component';
import { ErrorComponent } from './error/error.component';
import { VideoSearchComponent } from './video-search/video-search.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { VideoDetailsComponent } from './video-details/video-details.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoPageComponent,
    VideoComponent,
    ErrorComponent,
    VideoListComponent,
    VideoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    VideoSearchComponent,
    VideoCardComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
