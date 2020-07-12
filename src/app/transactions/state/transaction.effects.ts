import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TransactionsService } from '../services/transactions.service';
import * as TransactionActions from './transaction.actions';
import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Transaction } from '../transaction';

@Injectable()
export class TransactionEffects {

    constructor( private actions$: Actions,
                 private transactionsService: TransactionsService){}

    loadTransactions$ = createEffect(() => {
        let cursor = '';
        return this.actions$.pipe(
            ofType(TransactionActions.loadTransactions),
            concatMap(() => this.transactionsService.getTransactions().pipe(
                map(transactions => {
                    const transformedTransactions = this.transformTransaction(transactions).reverse();
                    cursor = transformedTransactions[9].row_id.toString();
                    return TransactionActions.loadTransactionsSucess({transactions: transformedTransactions, cursor});
                }),
                catchError(error => of(TransactionActions.loadTransactionsFailure({error})))
            ))
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
        return transformedTransactions;
    }
}

