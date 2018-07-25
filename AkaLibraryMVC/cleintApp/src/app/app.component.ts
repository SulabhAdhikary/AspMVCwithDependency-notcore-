// https://stackoverflow.com/questions/43257272/angular2-how-to-access-index-html-querystring-in-app-component//
// tslint:disable:quotemark

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

  }
}
