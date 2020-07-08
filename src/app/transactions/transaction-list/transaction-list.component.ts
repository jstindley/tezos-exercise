import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { TransactionsService } from '../services/transactions.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  constructor(private ts: TransactionsService, private store: Store<any>) { }

  transactions: Transaction[] = [];
  apiData = [];
  ngOnInit(): void {
    const woo: Transaction = {
      row_id: 1,
      date: new Date('1/2/2020'),
      amount: 100,
      type: 'transaction',
      address: '17th street'
    };
    for (let i = 0; i < 10; i++) {
      this.transactions.push(woo);
    }
    this.getApiData();
  }

  getApiData(): void {
    this.ts.getTransactions().subscribe(
      transactions => {
        console.log(transactions);
      }
    );
  }

}
