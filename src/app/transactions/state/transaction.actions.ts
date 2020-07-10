import { createAction, props } from '@ngrx/store';
import { Transaction } from '../transaction';


export const loadTransactions = createAction(
    '[Transaction] Load'
  );

export const loadTransactionsSucess = createAction(
    '[Transaction] Load Success',
    props<{transactions: Transaction[]}>()
  );

export const loadTransactionsFailure = createAction(
    '[Transaction] Load Failure',
    props<{error: string}>()
  );
