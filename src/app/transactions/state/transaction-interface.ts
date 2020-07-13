import * as AppState from '../../state/app.state';
import { Transaction } from '../transaction';

export interface State extends AppState.State {
    transactions: TransactionState;
}

export interface TransactionState {
    transactions: Transaction[];
    cursor: number;
    error: string;
}
