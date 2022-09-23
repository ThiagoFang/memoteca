import { Component, OnInit } from '@angular/core';
import { IPensamento } from 'src/interfaces/IPensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: IPensamento[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
