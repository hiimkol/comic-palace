import { Component, OnInit } from '@angular/core';
import { CATEGORY } from '../mock-categories';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  categories = CATEGORY;
  constructor() { }

  ngOnInit() {
    console.log(this.categories);
  }

}
