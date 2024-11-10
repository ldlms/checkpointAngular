import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-video-search',
  standalone:true,
  imports:[FormsModule],
  templateUrl: './video-search.component.html',
  styleUrl: './video-search.component.scss'
})
export class VideoSearchComponent {

  search:string = ""

  @Output() eventsearch = new EventEmitter<string>()

  searching(){
    this.eventsearch.emit(this.search);
  }

  
}
