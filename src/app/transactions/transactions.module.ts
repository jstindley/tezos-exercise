import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkScrollableModule } from '@angular/cdk/scrolling';


const transactionRoutes: Routes = [
  { path: '', component: TransactionListComponent}
];

@NgModule({
  declarations: [TransactionListComponent],
  imports: [
    CommonModule,
    ScrollingModule,
    CdkScrollableModule,
    RouterModule.forChild(transactionRoutes)
  ]
})
export class TransactionsModule { }
