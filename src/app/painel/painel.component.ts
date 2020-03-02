import { Component, OnInit, } from '@angular/core';
import { InfolabService } from '../services/infolab.service';

import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
   
})
export class PainelComponent implements OnInit {
  
  constructor(public servico: InfolabService) { }

  today: number = Date.now();
  title = '21/09/2019';
  salas1Andar: any = [];
  salasTerreo: any = [];
  retorno: any = {};
  texto: any;
  texto2: any;


  ngOnInit(): void {

    
    //setInterval(() => {
    // this.texto = window.localStorage.getItem("msg");   
    // this.texto2 = window.localStorage.getItem("msg2");
    //}, 7000);


    //CHAMAR A PRIMEIRA VEZ AO ABRIR TELA
    this.carregarDados();
    this.periodo();
    this.periodos;


    setInterval(() => { 
            //CHAMAR A CADA 1 segundo
      this.today = Date.now();
    }, 1000);

    setInterval(() => {
       //CHAMAR A CADA 30 Minutos    
      this.load();
    }, 900000);

    setInterval(() => {
      //CHAMAR A CADA 1h
      console.log("Chamou");
      this.carregarDados();
    }, 1800000);

  }

  carregarDados() {
    this.servico.getAula().subscribe((data: any) => {
      //console.log(data);
      this.retorno = data;
      this.salas1Andar = data.listaAulas.filter(x => x.codigoSala.substr(4, 1) == "0");
      this.salasTerreo = data.listaAulas.filter(x => x.codigoSala.substr(4, 1) == "1");

      this.texto = window.localStorage.getItem("msg");
      this.texto2 = window.localStorage.getItem("msg2");
    });
  }

  salvar() {
    window.localStorage.setItem("msg", this.texto);
    window.localStorage.setItem("msg2", this.texto2);
  }


  
  // MOSTRAR PERIODO NA TELA
  // HORA ATUAL 
  horas = new Date().getHours();
  minutos = new Date().getMinutes();

  hora_atual = this.horas + (":") + this.minutos;
 
  //RECEBE PERIODO VARIAVEL 
  periodos: any;


  periodo() {
    //MOSTRA MANHA NO CONSOLE
    if (this.horas > 1 && this.horas < 13) {
      this.periodos = 'Manhã';
      return this.periodos;

    } else if (this.horas > 12 && this.horas < 18) {
      this.periodos = 'Tarde';
      return this.periodos;

    } else if (this.horas > 17 && this.horas < 24) {
      this.periodos = 'Noite';
      return this.periodos;
    }else {
      this.periodos = 'Madrugada';
      return this.periodos;
    }

  }

  load() {
    //Session storage salva os dados como string
    location.reload();
    sessionStorage.refresh = false;
  }
  

}


