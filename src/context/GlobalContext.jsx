import { createContext,useReducer, useEffect } from "react";

export const initialState = {
  theme: localStorage.getItem('theme') || 'light',
  dentists: [],
  favs: JSON.parse(localStorage.getItem('favs')) || [],
  dentistDetail: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_DENTISTS':
      return { ...state, dentists: action.payload };
    case 'SET_FAVS':
      return { ...state, favs: action.payload };
    case 'SET_DENTIST_DETAIL':
      return { ...state, dentistDetail: action.payload };
    default:
      return state;
  }
};

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('theme', state.theme);
  }, [state.theme]);

  const fetchDentists = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      dispatch({ type: 'SET_DENTISTS', payload: data });
    } catch (error) {
      console.error('Error fetching dentists:', error);
    }
  };

  const fetchDentistDetail = async (id) => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await res.json();
      dispatch({ type: 'SET_DENTIST_DETAIL', payload: data });
    } catch (error) {
      console.error('Error fetching dentist detail:', error);
    }
  };

  const addFav = (dentist) => {
    const updatedFavs = [...state.favs, dentist];
    localStorage.setItem('favs', JSON.stringify(updatedFavs));
    dispatch({ type: 'SET_FAVS', payload: updatedFavs });
  };

  const toggleTheme = () => {
    dispatch({ type: 'SET_THEME', payload: state.theme === 'light' ? 'dark' : 'light' });
  };

  useEffect(() => {
    fetchDentists(); // Load dentists on initial load
  }, []);

  return (
    <ContextGlobal.Provider value={{ ...state, fetchDentists, fetchDentistDetail, addFav, toggleTheme }}>
      <div className={`app ${state.theme}`}>
        {children}
      </div>
    </ContextGlobal.Provider>
  );
};
