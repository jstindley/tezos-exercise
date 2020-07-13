import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../transaction';

@Injectable()
export class TransactionsService {
  private transactionsUrl = 'https://api.tzstats.com/tables/op?columns=row_id,type,volume,time,sender&receiver=tz1gfArv665EUkSg2ojMBzcbfwuPxAvqPvjo&type=transaction&limit=10';
  constructor(private http: HttpClient) { }

  getTransactions(cursor?): Observable<Transaction[]> {
    let url = this.transactionsUrl;
    if (cursor !== '' && cursor) {
      url += `&cursor.lte=${cursor}`;
    }
    url += '&order=desc';
    return this.http.get<Transaction[]>(url);
  }
}
