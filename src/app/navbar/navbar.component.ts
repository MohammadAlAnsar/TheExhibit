import { Component, OnInit } from '@angular/core';
import { NgLocaleLocalization } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarOpen = false;
  private navbar = document.getElementsByClassName('n-l');
  constructor() { }

  ngOnInit(): void {
  }
  hamburgerClick(){
    console.log('Test');
    console.log(this.navbar);
    this.navbarOpen = !this.navbarOpen;
  }

  toggleNavbar(){
    this.navbarOpen = !this.navbarOpen;
  }
}
