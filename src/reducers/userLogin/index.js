import { USER_LOGIN } from "../../actions/LoginAction";

const initialState = {
  userLoginResult: false,
  userLoginLoading: false,
  userLoginError: false,
};

const userLogin = (state = initialState, action) => {
  console.log(action.payload?.data);
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        userLoginResult: action.payload.data,
        userLoginLoading: action.payload.loading,
        userLoginError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default userLogin;
