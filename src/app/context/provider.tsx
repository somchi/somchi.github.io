'use client';

import { createContext, useReducer } from 'react';
import { reducer } from './reducer';
import { Action, AppStore } from '../libs/types';

const INITIAL_STATE: AppStore = {
  isResumeModalOpen: false,
};

export const AppContext = createContext<{
  state: AppStore;
  dispatch: React.Dispatch<Action>;
}>({ state: INITIAL_STATE, dispatch: () => null });

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
