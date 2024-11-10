import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoPageComponent } from './video-page/video-page.component';
import { VideoComponent } from './video/video.component';
import { ErrorComponent } from './error/error.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { VideoDetailsComponent } from './video-details/video-details.component';

const routes: Routes = [
  {path:"", component:VideoComponent},
  {path:"video",component:VideoPageComponent},
  {path:"video/:id",component:VideoDetailsComponent},
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
