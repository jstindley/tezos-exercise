import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransactionsModule } from 'src/app/transactions/transactions.module';
import { ShellComponent } from './home/shell/shell.component';
import { HeaderComponent } from './home/header/header.component';
import { environment } from '../environments/environment';
/* NGRX  */
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TransactionsModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(
      {
        name: 'Tezos Transactions',
        maxAge: 25,
        logOnly: environment.production
      }
    ),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
