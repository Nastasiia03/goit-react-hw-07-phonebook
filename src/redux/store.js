import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsReducer} from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";


const mainReducer = combineReducers({
  contacts: contactsReducer,
  filter: filtersReducer,
});



export const store = configureStore({
  reducer: mainReducer,
})

