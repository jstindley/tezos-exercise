import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Subscription, Observable, BehaviorSubject } from 'rxjs';
import { Transaction } from './transaction';
import { Store } from '@ngrx/store';
import { State } from './state/transaction-interface';
import { getTransactions } from './state/transaction.selectors';
import * as TransactionActions from './state/transaction.actions';

export class TransactionSource extends DataSource<Transaction | undefined> {
    private cachedTransactions: Transaction[] = [];
    private dataStream = new BehaviorSubject<(Transaction | undefined)[]>(this.cachedTransactions);
    private subscription = new Subscription();

    constructor(private store: Store<State>) {
        super();
        this.store.dispatch(TransactionActions.loadTransactions());
        this.initFetch();
    }

    connect(collectionViewer: CollectionViewer): Observable<(Transaction | undefined)[]> {
        this.subscription.add(collectionViewer.viewChange.subscribe(() => {
            // get more data
            this.fetchPage();
        }));

        return this.dataStream;
    }

    disconnect(): void {
      this.subscription.unsubscribe();
    }

    private fetchPage(): void {
        // change
        this.store.select(getTransactions).subscribe( transactions => {
            if (transactions.length > 0 || !transactions) {
                this.cachedTransactions.push(transactions[0]);
                this.dataStream.next(this.cachedTransactions);
            }
        });
    }

    private initFetch(): void {
        this.store.select(getTransactions).subscribe( (transactions: Transaction[]) => {
                Object.assign(this.cachedTransactions, transactions);
                this.dataStream.next(this.cachedTransactions);
        });
    }
}
