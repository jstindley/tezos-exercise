import { createReducer, on } from '@ngrx/store';
import { TransactionState } from './transaction-interface';
import * as TransactionActions from './transaction.actions';

const initialState: TransactionState = {
    transactions: [],
    cursor: '',
    error: ''
};

export const transactionReducer = createReducer<TransactionState>(
    initialState,
    on(TransactionActions.loadTransactionsSucess, (state, action): TransactionState => {
        return {
            ...state,
            transactions: action.transactions,
            cursor: action.cursor,
            error: ''
        };
    }),
    on(TransactionActions.loadTransactionsFailure, (state, action): TransactionState => {
        return {
            ...state,
            transactions: [],
            cursor: '',
            error: action.error
        };
    }),
    on(TransactionActions.setCursor, (state, action): TransactionState => {
        return {
            ...state,
            cursor: action.cursor
        };
    })
);
