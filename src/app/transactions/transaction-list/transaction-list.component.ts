import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { TransactionsService } from '../services/transactions.service';
import { Store } from '@ngrx/store';
import { State } from '../state/transaction-interface';
import * as TransactionActions from '../state/transaction.actions';
import { getTransactions } from '../state/transaction.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  transactions$: Observable<Transaction[]>;

  constructor(private ts: TransactionsService, private store: Store<State>) { }

  transactions: Transaction[] = [];
  apiData = [];

  ngOnInit(): void {
  this.store.dispatch(TransactionActions.loadTransactions());
  this.transactions$ = this.store.select(getTransactions);
  }

}
