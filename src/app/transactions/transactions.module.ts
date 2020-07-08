import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { TransactionRowComponent } from './transaction-row/transaction-row.component';


const transactionRoutes: Routes = [
  { path: '', component: TransactionListComponent}
];

@NgModule({
  declarations: [TransactionListComponent, TransactionRowComponent],
  imports: [
    CommonModule,
    ScrollingModule,
    CdkScrollableModule,
    RouterModule.forChild(transactionRoutes)
  ]
})
export class TransactionsModule { }
