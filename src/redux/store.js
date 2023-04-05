import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsReducer} from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["contacts"],
};

const mainReducer = combineReducers({
  contacts: contactsReducer,
  filter: filtersReducer,
});

const persisteredReducer = persistReducer(persistConfig, mainReducer); 

export const store = configureStore({
  reducer: persisteredReducer,
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
      })
})

export const persistor = persistStore(store);