import { useRoutes } from 'react-router-dom';
import './App.css';
import Routes from './Assets/Routes';
import { createContext, useState } from 'react';
export const ThemeContext = createContext(null);

function App() {
  let [theme , setTheme] = useState("light")
  let paths = useRoutes(Routes)
  return <ThemeContext.Provider  value={[theme , setTheme]}   >

        {paths}


     </ThemeContext.Provider>
  
  
}

export default App;
