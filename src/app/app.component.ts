import { ENDPOINTS } from './../environments/router';
import { HttpService } from './services/http.service';
import { Component, OnInit } from '@angular/core';
import { prato } from './models/prato';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}

