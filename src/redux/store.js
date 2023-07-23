import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filter/slice';
import { contactsApi } from './contacts/contactsSlice';
import { authApi } from './auth/';
import authTokenReducer from './auth/tokenSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['authToken'],
};

const persistedAuthReducer = persistReducer(persistConfig, authTokenReducer);

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    filter: filterReducer,
    authToken: persistedAuthReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
    authApi.middleware,
  ],
});

export const persistor = persistStore(store);
