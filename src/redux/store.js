import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { phonebookReducer } from './contactsSlice';

const rootReducer = combineReducers({
  contacts: phonebookReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
