import { createReducer, on } from '@ngrx/store';
import { TransactionState } from './transaction-interface';
import * as TransactionActions from './transaction.actions';

const initialState: TransactionState = {
    transactions: [],
    cursor: 0,
    error: ''
};

export const transactionReducer = createReducer<TransactionState>(
    initialState,
    on(TransactionActions.loadTransactionsSucess, (state, action): TransactionState => {
        return {
            ...state,
            transactions: action.transactions,
            error: ''
        };
    }),
    on(TransactionActions.loadTransactionsFailure, (state, action): TransactionState => {
        return {
            ...state,
            transactions: [],
            cursor: 0,
            error: action.error
        };
    }),
    on(TransactionActions.setCursor, (state, action): TransactionState => {
        return {
            ...state,
            cursor: action.cursor
        };
    }),
    on(TransactionActions.loadMoreTransactionsSuccess, (state, action): TransactionState => {
        return {
            ...state,
            transactions: action.transactions,
            error: ''
        };
    }),
    on(TransactionActions.loadMoreTransactionsFailure, (state, action): TransactionState => {
        return {
            ...state,
            transactions: [],
            cursor: 0,
            error: action.error
        };
    })
);
