import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  constructor() { }
  woo = { first: 1, second: 2, third: 3};
  items = [this.woo, this.woo, this.woo, this.woo, this.woo, this.woo, this.woo];

  ngOnInit(): void {

  }

}
