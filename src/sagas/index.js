/**
 * Root Sagas
 */
import { all } from 'redux-saga/effects';

// sagas
import userSaga from './userSaga'

export default function* rootSaga(getState) {
    console.log('getState', getState)
    yield all([
        userSaga()
    ]);
}