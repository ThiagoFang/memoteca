import { Component, Input, OnInit } from '@angular/core';
import { IPensamento } from 'src/interfaces/IPensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: IPensamento = {
    id: 0,
    conteudo: 'I Love Angular',
    autoria: 'Nay',
    modelo: 'modelo3'
  }

  constructor() { }

  larguraPensamento() {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  ngOnInit(): void {
  }

}
