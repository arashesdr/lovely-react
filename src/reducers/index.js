import { combineReducers } from "redux";

import { contacsCounterReducer } from "./contacsCounter.reducer";
import { tabContentReducer } from "./tabContenet.reducer";
import { contactReducer } from "./contact.reducer";
import { errorReducer } from "./error.reducer";
import { tabReducer } from "./tab.reducer";

export const reducers = combineReducers({
  contact: contactReducer,
  tabClicked: tabReducer,
  contacsTabInfo: contacsCounterReducer,
  tabContent: tabContentReducer,
  errorHandler: errorReducer,
});
