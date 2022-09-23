import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPensamento } from 'src/interfaces/IPensamento';
import { idText } from 'typescript';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {
  pensamento: IPensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }
  constructor( 
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    });
  }

  excluirPensamento() {
    if(this.pensamento.id){
      this.service.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      });
    };
  };

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  };
}
