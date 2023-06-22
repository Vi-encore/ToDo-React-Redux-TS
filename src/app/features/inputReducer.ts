// import { createSlice } from "@reduxjs/toolkit";

// const inputReducer = createSlice({
//   name: "input",
//   initialState: "",
//   reducers: {
//     setInputValue: (state, action) => {
//       return action.payload;
//     },
//   },
// });

// export const { setInputValue } = inputReducer.actions;
// export default inputReducer.reducer;

const LOG_ME_IN = "LOG_ME_IN";
const LOG_ME_OUT = "LOG_ME_OUT";

function logIn() {
  return {
    type: LOG_ME_IN,
  };
}

function logOut() {
  return {
    type: LOG_ME_OUT,
  };
}

const initState = {
  isLoggedIn: false,
  email: "",
};

const reducer = (state = initState, action: any) => {
  switch (action.type) {
    case LOG_ME_IN:
      return {
        ...state,
        isLoggedIn: (state.isLoggedIn = true),
      };
    case LOG_ME_OUT:
      return {
        ...state,
        isLoggedIn: (state.isLoggedIn = false),
      };
    default:
      return state;
  }
};
