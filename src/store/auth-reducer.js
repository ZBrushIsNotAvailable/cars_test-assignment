import {authAPI} from "../api/api";

const LOGIN = "LOGIN"
const REFRESH = "REFRESH"

const initialState = {
    userName: "",
    // token: ""
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                userName: action.userName,
                // token: action.token
            }

        default:
            return state
    }
}


// обработать рефреш токена
const setCredentials = (userName) => ({type: LOGIN, userName})

export const login = () => async (dispatch) => {
    const data = await authAPI.login()
    localStorage.setItem("token", data.token);
    dispatch(setCredentials(data.userName))
}
export default authReducer