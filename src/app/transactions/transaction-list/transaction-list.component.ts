import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  constructor() { }

  transactions: Transaction[] = [];

  ngOnInit(): void {
    const woo: Transaction = {
      row_id: 1,
      date: new Date('1/2/2020'),
      amount: 100,
      type: 'transaction',
      address: '17th street'
    };
    this.transactions.push(woo);
  }

}
