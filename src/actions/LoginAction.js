import axios from "axios";

export const USER_LOGIN = "USER_LOGIN";

export const userLogin = (data) => {
  console.log("2. MAsuk Action");
  return (dispatch) => {
    dispatch({
      type: USER_LOGIN,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "POST",
      url: "http://localhost:8000/user/login",
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        console.log("berhasil dapet data" + JSON.stringify(response.data.data));
        dispatch({
          type: USER_LOGIN,
          payload: {
            loading: false,
            data: response.data.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log("gagal dapt data");
        dispatch({
          type: USER_LOGIN,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
