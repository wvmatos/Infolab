import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-mensagem',
  templateUrl: './editar-mensagem.component.html',
  styleUrls: ['./editar-mensagem.component.css']
})
export class EditarMensagemComponent implements OnInit {

  texto: any;
  texto2: any;
  
  constructor() { }

  ngOnInit() {
    this.texto = window.localStorage.getItem("msg");
    this.texto2 = window.localStorage.getItem("msg2");
  }

  salvar() {
    window.localStorage.setItem("msg", this.texto);
    window.localStorage.setItem("msg2", this.texto2);
  }
  

  
}




