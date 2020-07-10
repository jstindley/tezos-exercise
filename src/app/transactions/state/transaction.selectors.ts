import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TransactionState } from './transaction-interface';

const getTransactionFeatureState = createFeatureSelector<TransactionState>('transactions');

export const getTransactions = createSelector(
    getTransactionFeatureState,
    state => state.transactions
);
