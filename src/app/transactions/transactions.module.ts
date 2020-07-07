import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TransactionListComponent } from './transaction-list/transaction-list.component';

const transactionRoutes: Routes = [
  { path: '', component: TransactionListComponent}
];

@NgModule({
  declarations: [TransactionListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(transactionRoutes)
  ]
})
export class TransactionsModule { }
