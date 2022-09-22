import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: "Comunicação entre componentes",
      autoria: "Angular",
      modelo: "modelo3"
    },
    {
      conteudo: "Binding of Isac lorem Angular",
      autoria: "Angular",
      modelo: "modelo2"
    },
    {
      conteudo: "Mussunm Impsum, lorem dolem lorem impsum dolor amet dyingMussunm Impsum, lorem dolem lorem impsum dolor amet dying a light em mindus impsu Mussunm Impsum, lorem dolem lorem impsum dolor amet dying a light em mindus impsu Mussunm Impsum, lorem dolem lorem impsum dolor amet dying a light em mindus impsu",
      autoria: "Angular",
      modelo: "modelo2"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
