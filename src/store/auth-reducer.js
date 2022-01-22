import {authAPI} from "../api/api";

const LOGIN = "LOGIN"

const initialState = {
    userName: ""
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                userName: action.userName,
            }

        default:
            return state
    }
}

const setCredentials = (userName) => ({type: LOGIN, userName})

export const login = () => async (dispatch) => {
    const data = await authAPI.login()
    localStorage.setItem("token", data.token);
    dispatch(setCredentials(data.userName))
}
export default authReducer