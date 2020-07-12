import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { Store } from '@ngrx/store';
import { State } from '../state/transaction-interface';
import { Observable } from 'rxjs';
import { TransactionSource } from '../datasource';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  transactions$: Observable<Transaction[]>;

  constructor(private store: Store<State>) { }
  transactions = new TransactionSource(this.store);

  ngOnInit(): void {
  }

}
