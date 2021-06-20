import * as types from "../constants";

const initialState = {
  showAddAccount: false,
  signupemail: "",
  signuppassword: "",
  firstConnect: false,
  loggedin: false,
};

export default function reducer(state = initialState, actions) {
  switch (actions.type) {
    case types.testActionType:
      return { ...state, firstConnect: actions.payload };
 }
}