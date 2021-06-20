import { Auth } from "aws-amplify";
import { NotificationManager } from "react-notifications";

import * as types from "../constants";
import request from "../../utils/request";
import store from "../store";
import { bugReport } from "../../utils/helper";

export async function testFunction() {
  store.dispatch({ type: types.testActionType, payload: "this is test from action" });
//   store.dispatch({ type: types.SET_FIRSTCONNECT, payload: firstConnect });

}
