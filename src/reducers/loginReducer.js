import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from '../actions/types'

const INITIAL_STATE = {
    data: {},
    session_id: '',
};
function loginReducer(state = INITIAL_STATE, action) {
    switch (action.types) {
        case LOGIN_USER:
            return {
                ...state,
                formData: action.formData,
                response: action.payload
            };
        case LOGIN_USER_FAILURE:
            return {
                ...state
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                session_id: action.payload.session_id
            }
        default: return state
    }
}

export default loginReducer