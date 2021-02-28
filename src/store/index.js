import { applyMiddleware, compose, createStore } from "redux";
import reduxThunk from "redux-thunk";

import { getContacts } from "../actions/contact.actions";
import { reducers } from "./../reducers/index";
import config from "../data/configs.json";

export const store = createStore(
  reducers,
  compose(applyMiddleware(reduxThunk))
);

store.dispatch(getContacts(config.numberCards));
