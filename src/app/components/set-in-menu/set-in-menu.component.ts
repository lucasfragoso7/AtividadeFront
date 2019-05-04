import { prato } from './../../models/prato';
import { ENDPOINTS } from './../../../environments/router';
import { HttpService } from 'src/app/services/http.service';
import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';

@Component({
  selector: 'app-set-in-menu',
  templateUrl: './set-in-menu.component.html',
  styleUrls: ['./set-in-menu.component.css']
})
export class SetInMenuComponent implements OnInit {
  pedidos:Array<Pedido>
  pratos:Array<prato>
  prato:prato
  constructor( private service:HttpService) { }

  ngOnInit() {
    this.service.get<Pedido[]>(ENDPOINTS.PEDIDOS).subscribe(frag => {
      this.pedidos = frag;
      console.log(this.pedidos)
    })
    this.service.get<prato[]>(ENDPOINTS.PRATO).subscribe(fra=>{
      this.pratos = fra;
    })
  }
  setPedido(pedido:prato){
    let body:Pedido = new Pedido(pedido.id,pedido.valor);
    this.service.post<Pedido>(ENDPOINTS.PRATO,body)
    console.log(pedido)
    this.ngOnInit();
  }


}
