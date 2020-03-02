import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule }    from '@angular/forms';
import { EditarMensagemComponent } from './editar-mensagem/editar-mensagem.component';
import { RouterModule } from '@angular/router';
import { PainelComponent } from './painel/painel.component';
import {registerLocaleData} from '@angular/common';

// PARA NAO DAR ERRO QUANDO ATUALIZAR A PAGINA (F5)
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import br from '@angular/common/locales/pt';
registerLocaleData(br);





@NgModule({
  declarations: [
    AppComponent,
    EditarMensagemComponent,
    PainelComponent,
  ],
  
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    
  ],

  providers: [{ provide: LOCALE_ID, useValue: 'pt'}, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {}

