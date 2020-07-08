import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TransactionsService {

  constructor(private http: HttpClient) { }

  getTransactions(cursor?, limit = 10): Observable<any> {
    let power = `https://api.tzstats.com/tables/op?columns=row_id,type,volume,time,sender&receiver=tz1gfArv665EUkSg2ojMBzcbfwuPxAvqPvjo&type=transaction&limit=${limit}`;
    if (cursor) {
      power += `&cursor.lte=${cursor}`;
    }
    return this.http.get(power);
  }
}
