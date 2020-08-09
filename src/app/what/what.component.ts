import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import {HostBinding} from '@angular/core';
import {trigger, transition, state, style, animate} from '@angular/animations';


@Component({
  selector: 'app-what',
  templateUrl: './what.component.html',
  styleUrls: ['./what.component.scss'],
  animations: [
  //   trigger('openClose', [
  //   state('open', style({
  //     opacity: 0,
  //     transform: "translateX(100%)"
  //   })),
  //   state('close',style({
  //     opacity: 1,
  //     transform: "translateX(-0%)"
  //   })),
  //   transition('open => close', [
  //     animate('20s')
  //   ]),
  //   transition('close => open', [
  //     animate('0.5s')
  //   ]),
  // ]),
  ]
})
export class WhatComponent implements OnInit {
 

  constructor() { }

  ngOnInit(): void {
    
  }

}
