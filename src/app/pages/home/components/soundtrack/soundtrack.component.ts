import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soundtrack',
  templateUrl: './soundtrack.component.html',
  styleUrls: ['./soundtrack.component.scss']
})
export class SoundtrackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  songOne = false;
  songTwo = false;
  songThree = false;
  startAudio = true;

  playSong() {
    this.songOne = true;
    this.songTwo = false;
    this.songThree = false;
    this.startAudio = false;
  }

  playSongTwo() {
    this.songOne = false;
    this.songTwo = true;
    this.songThree = false;
    this.startAudio = false;
  }

  playSongThree() {
    this.songOne = false;
    this.songTwo = false;
    this.songThree = true;
    this.startAudio = false;
  }

}





