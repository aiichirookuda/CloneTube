import React, { createContext, ReactNode, VFC, useReducer } from 'react';

type Props = {
  children: ReactNode;
};

type VIDEO = {
  globalState: any;
  setGlobalState: React.Dispatch<any>;
};

const initialState = {
  popular: [],
  related: [],
  searched: [],
  selected: {},
  text: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_POPULAR':
      return { ...state, popular: action.payload.popular };
    case 'SET_RELATED':
      return { ...state, related: action.payload.related };
    case 'SET_SELECTED':
      return { ...state, selected: action.payload.selected };
    case 'SET_SEARCHED':
      return { ...state, searched: action.payload.searched };
    case 'SET_TEXT':
      return { ...state, text: action.payload.text };
    default:
      return state;
  }
};

export const Store = createContext<VIDEO>({
  globalState: initialState,
  setGlobalState: () => null,
});

export const StoreProvider: VFC<Props> = ({ children }) => {
  const [globalState, setGlobalState] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ globalState, setGlobalState }}>
      {children}
    </Store.Provider>
  );
};
