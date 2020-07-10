import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { TransactionRowComponent } from './transaction-row/transaction-row.component';
import { TransactionsService } from './services/transactions.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { transactionReducer } from './state/transaction.reducer';
import { TransactionEffects } from './state/transaction.effects';

const transactionRoutes: Routes = [
  { path: '', component: TransactionListComponent}
];

@NgModule({
  declarations: [TransactionListComponent, TransactionRowComponent],
  imports: [
    CommonModule,
    ScrollingModule,
    CdkScrollableModule,
    HttpClientModule,
    RouterModule.forChild(transactionRoutes),
    StoreModule.forFeature('transactions', transactionReducer),
    EffectsModule.forFeature([TransactionEffects])
  ],
  providers: [TransactionsService]
})
export class TransactionsModule { }
