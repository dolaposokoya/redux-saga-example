/**
 * Todo Sagas
 */
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

// api
import { loginUser } from './../api';
import { LOGIN_USER, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS } from '../actions/types'


const loginUserRequest = async (formData) =>
    await loginUser(formData)
        .then(response => response)
        .catch(error => error);


function* getUserFromServer({ payload, callback }) {
    try {
        const response = yield call(loginUserRequest, payload);
        if (response.success === true) {
            let res = response.data;
            callback({ error: false, message: response.message, data: res })
        }
        else if (response.message === 'Invalid credentials provided' || response.message === 'Unauthorized Access' || response.message === 'Missing Authorization Header') {
            callback({ error: true, message: response.message })
        }
        else {
            callback({ error: true, message: response.message })
        }
    } catch (error) {
        callback({ error: true, message: error.message })
    }
}

/**
 * Get development
 */
export function* getUser() {
    yield takeEvery(LOGIN_USER_SUCCESS, getUserFromServer);
}

/**
 * Email Root Saga
 */
export default function* rootSaga() {
    yield all([
        fork(getUser)
    ]);
}