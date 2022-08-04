import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-info-game',
  templateUrl: './info-game.component.html',
  styleUrls: ['./info-game.component.scss']
})
export class InfoGameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
