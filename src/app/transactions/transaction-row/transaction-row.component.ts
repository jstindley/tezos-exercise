import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from '../transaction';
@Component({
  selector: 'app-transaction-row',
  templateUrl: './transaction-row.component.html',
  styleUrls: ['./transaction-row.component.scss']
})
export class TransactionRowComponent implements OnInit {

  @Input() transaction: Transaction;

  constructor() { }

  ngOnInit(): void {
  }

}
