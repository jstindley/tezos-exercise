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
        this.initFetch();
    }

    connect(collectionViewer: CollectionViewer): Observable<(Transaction | undefined)[]> {
        this.subscription.add(collectionViewer.viewChange.subscribe(() => {
            this.store.dispatch(TransactionActions.loadMoreTransactions());
        }));

        return this.dataStream;
    }

    disconnect(): void {
      this.subscription.unsubscribe();
    }

    private initFetch(): void {
        this.store.dispatch(TransactionActions.loadTransactions());
        this.store.select(getTransactions).subscribe( (transactions: Transaction[]) => {
            transactions.forEach(transaction => {
                this.cachedTransactions.push(transaction);
            });
            this.dataStream.next(this.cachedTransactions);
        });
    }
}
