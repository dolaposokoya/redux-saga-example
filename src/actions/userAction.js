import {
    LOGIN_USER, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS
} from './types';


// Login

export const getUser = (formData, callback) => ({
    type: LOGIN_USER_SUCCESS,
    payload: formData,
    callback: callback
});

/**
 * Redux Action Get Todos Success
 */
export const getUserSuccess = (response, callback) => ({
    type: 'LOGIN_USER_SUCCESSA',
    // type: LOGIN_USER_SUCCESS,
    payload: {
        data: response.data,
        // session_id: response.data.SESSION_ID,
    },
    callback
});

export const getUserSuccessA = (formData, response, callback) => ({
    type: 'LOGIN_USERA',
    formData,
    payload: response,
    callback
});

/**
 * Redux Action Get Todos Failure
 */
export const getUserFailure = (error) => ({
    type: LOGIN_USER_FAILURE,
    payload: error
});







