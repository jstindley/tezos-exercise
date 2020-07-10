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
            error: ''
        };
    }),
    on(TransactionActions.loadTransactionsFailure, (state, action): TransactionState => {
        return {
            ...state,
            transactions: [],
            error: action.error
        };
    })
);
