const LoginDataObj = {
    isLogin: false
};
const LoginReducer = (state = LoginDataObj, action) => {
    switch (action.type) {
        case 'LOGIN_STATE':
            return Object.assign({}, state, {
                isLogin: action.text
            })
        default:
            return state;
    }
}

export default LoginReducer
