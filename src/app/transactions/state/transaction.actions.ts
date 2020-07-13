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

export const setCursor = createAction(
  '[Transaction] Set Cursor',
  props<{cursor: number}>()
);

export const loadMoreTransactions = createAction(
  '[Transaction] Load more Transactions'
);

export const loadMoreTransactionsSuccess = createAction(
  '[Transaction] Load more Transactions Success',
  props<{transactions: Transaction[]}>()
);

export const loadMoreTransactionsFailure = createAction(
  '[Transaction] Load more Transactions Failure',
  props<{error: string}>()
);
