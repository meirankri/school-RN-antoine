import React, { useReducer, createContext } from 'react';

const initialState = {
  students: [
    {
      id: 1, name: 'Alice', lessons: [1, 2], attendance: 0, notes: [11, 12, 18],
    },
    {
      id: 2, name: 'Alan', lessons: [3], attendance: 0, notes: [10, 14.5, 11],
    },
    {
      id: 3, name: 'Phil', lessons: [1, 2, 3], attendance: 0, notes: [11, 9, 9],
    },
    {
      id: 4, name: 'Naoudi', lessons: [1], attendance: 0, notes: [14.5, 19, 18],
    },
    {
      id: 5, name: 'Fenley', lessons: [3], attendance: 0, notes: [9, 7, 11],
    },
  ],
  lessons: [
    { id: 1, title: 'React' },
    { id: 2, title: 'React Native' },
    { id: 3, title: 'MongoDB' },
  ],
  behaviours: [],
  order: false,
};
// Copie l'objet initialState dans copyInitialState

const copyInitialState = JSON.parse(JSON.stringify(initialState));
// ici on crée le context qui va diffuser notre reducer partout
// en params on lui met l'initial state
export const SchoolContext = createContext(copyInitialState);

// on creer le recuder qui va gerer la logique en fonction des action
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      // eslint-disable-next-line no-plusplus
      state.students.find((s) => s.id === action.id).attendance++;
      return {
        ...state,
      };
    case 'DECREMENT':

      if (state.students.find((s) => s.id === action.id).attendance > 0) {
        // eslint-disable-next-line no-plusplus
        state.students.find((s) => s.id === action.id).attendance--;
      }
      return {
        ...state,
      };

    default:
      throw new Error('bad action type');
  }
};

// ici on crée un provider qui va contextualiser le state et le dispatch
// dans touts les components en props children
export const SchoolProvider = (props) => {
  // ici on recupere le state et le dispatch de l'use reducer
  const [state, dispatch] = useReducer(reducer, copyInitialState);

  // le return qui prendre en props touts les components de l'app
  return (
    <SchoolContext.Provider value={[state, dispatch]}>
      {props.children}
    </SchoolContext.Provider>
  );
};
