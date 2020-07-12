import { createAction, props } from '@ngrx/store';
import { Transaction } from '../transaction';


export const loadTransactions = createAction(
    '[Transaction] Load'
  );

export const loadTransactionsSucess = createAction(
    '[Transaction] Load Success',
    props<{transactions: Transaction[], cursor: string}>()
  );

export const loadTransactionsFailure = createAction(
    '[Transaction] Load Failure',
    props<{error: string}>()
  );

export const setCursor = createAction(
  '[Transaction] Set Cursor',
  props<{cursor: string}>()
);
