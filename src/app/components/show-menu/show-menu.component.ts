import { ENDPOINTS } from './../../../environments/router';
import { Component, OnInit } from '@angular/core';
import { prato } from 'src/app/models/prato';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-show-menu',
  templateUrl: './show-menu.component.html',
  styleUrls: ['./show-menu.component.css']
})
export class ShowMenuComponent implements OnInit {
  itens: Array<prato>

  constructor(private service: HttpService) { }

  ngOnInit() {
    this.service.get<prato[]>(ENDPOINTS.PRATO).subscribe(frag => {
      this.itens = frag;
      console.log(this.itens)
    })

  }
}
