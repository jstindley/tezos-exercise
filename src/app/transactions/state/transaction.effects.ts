import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TransactionsService } from '../services/transactions.service';
import * as TransactionActions from './transaction.actions';
import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Transaction } from '../transaction';
import { Store } from '@ngrx/store';
import { State } from './transaction-interface';
import { getCursor } from './transaction.selectors';

@Injectable()
export class TransactionEffects {

    constructor( private actions$: Actions,
                 private transactionsService: TransactionsService,
                 private store: Store<State>){}

    loadTransactions$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(TransactionActions.loadTransactions),
            concatMap(() => this.transactionsService.getTransactions().pipe(
                map(transactions => {
                    const transformedTransactions = this.transformTransaction(transactions);
                    return TransactionActions.loadTransactionsSucess({transactions: transformedTransactions});
                }),
                catchError(error => of(TransactionActions.loadTransactionsFailure({error})))
            ))
        );
    });

    loadMoreTransactions$ = createEffect(() => {
        let cursor;
        this.store.select(getCursor).subscribe(currentCursor => cursor = currentCursor);
        return this.actions$.pipe(
            ofType(TransactionActions.loadMoreTransactions),
            concatMap(() => {
                return this.transactionsService.getTransactions(cursor).pipe(
                    map(transactions => {
                        const transformedTransactions = this.transformTransaction(transactions);
                        return TransactionActions.loadMoreTransactionsSuccess({transactions: transformedTransactions});
                    }),
                    catchError(error => of(TransactionActions.loadMoreTransactionsFailure({error})))
                );
            })
        );
    });

    transformTransaction(collection): Transaction[] {
        const transformedTransactions: Transaction[] = [];
        collection.forEach(transaction => {
            transformedTransactions.push(
                {
                    row_id: transaction[0],
                    type: transaction[1],
                    amount: transaction[2],
                    date: transaction[3],
                    address: transaction[4]
                }
            );
        });
        this.store.dispatch(TransactionActions.setCursor({cursor: transformedTransactions[9].row_id}));
        return transformedTransactions;
    }
}

