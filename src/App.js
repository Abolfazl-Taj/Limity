import { useRoutes } from 'react-router-dom';
import './App.css';
import Routes from './Assets/Routes';

function App() {
  const paths = useRoutes(Routes)

  return paths
}

export default App;
