/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */

import React, { useReducer, createContext } from 'react';
import average from './helpers/average';
import newArray from './helpers/newArray';

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

// pour copier un object avec plusieurs objects à l'interieur c'est une astuce
// const copyInitialState = JSON.parse(JSON.stringify(initialState));
// ici on crée le context qui va diffuser notre reducer partout
// en params on lui met l'initial state
export const SchoolContext = createContext(initialState);

function compare(a, b, ascOrdDsc) {
  // Use toUpperCase() to ignore character casing
  const bandA = average(a.notes);
  const bandB = average(b.notes);

  let comparison = 0;
  if (ascOrdDsc) {
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
  } else if (bandA < bandB) {
    comparison = 1;
  } else if (bandA > bandB) {
    comparison = -1;
  }

  return comparison;
}

// on creer le recuder qui va gerer la logique en fonction des action
const reducer = (state, action) => {
  let students; let student; let ascOrdDsc; let behaviours;

  switch (action.type) {
    case 'INCREMENT':
      // ici on modifie uniquement le student en lui augementent attendance
      student = { ...state.students.find((s) => s.id === action.id) };
      student.attendance++;

      // avec map on retourne tout les element dans un nouveau tableau,
      // en modifiant le student en question
      students = state.students.map((s) => {
        if (s.id !== action.id) return s;
        return student;
      });
      // on remplace students de l'initial state avec celui qu'on vient de créer
      return {
        ...state, students,
      };
    case 'DECREMENT':
      student = { ...state.students.find((s) => s.id === action.id) };
      // eslint-disable-next-line no-plusplus
      student.attendance--;

      students = state.students.map((s) => {
        if (s.id !== action.id) return s;
        return student;
      });
      students = state.students.map((s) => {
        if (s.id !== action.id) return s;
        return student;
      });
      return {
        ...state, students,
      };
    case 'RESET_ABSENCE':
      student = { ...state.students.find((s) => s.id === action.id) };
      // eslint-disable-next-line no-plusplus
      student.attendance = 0;

      students = state.students.map((s) => {
        if (s.id !== action.id) return s;
        return student;
      });
      return {
        ...state, students,
      };
    case 'RESET_ALL_ABSENCE':

      students = state.students.map((newStudent) => {
        const s = { ...newStudent };
        s.attendance = 0;
        return s;
      });

      return {
        ...state, students,
      };
    case 'ORDER_ASC_DSC':
      students = newArray([...state.students]);
      if (state.order === false) ascOrdDsc = true;
      else ascOrdDsc = false;

      students.sort((a, b) => compare(a, b, ascOrdDsc));
      return {
        ...state, students, order: ascOrdDsc,
      };
    case 'HANDLE_SELECT':
      behaviours = state.behaviours.map((newBehaviour) => {
        const b = { ...newBehaviour };
        return b;
      });
      if (behaviours.length !== 0) {
        for (let i = 0; i < behaviours.length; i++) {
          if (behaviours[i].id === action.id) {
            behaviours[i].mention = action.mention;
          } else {
            behaviours.push({ id: action.id, mention: action.mention });
          }
        }
      } else {
        behaviours.push({ id: action.id, mention: action.mention });
      }

      return {
        ...state, behaviours,
      };

    default:
      throw new Error('bad action type');
  }
};

// ici on crée un provider qui va contextualiser le state et le dispatch
// dans touts les components en props children
export const SchoolProvider = ({ children }) => {
  // ici on recupere le state et le dispatch de l'use reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // le return qui prendre en props touts les components de l'app
  return (
    <SchoolContext.Provider value={[state, dispatch]}>
      {children}
    </SchoolContext.Provider>
  );
};
