import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { useDispatch } from "react-redux";
import AllRoutes from './AllRoutes';
import Navbar from './components/navbar/Navbar';
import { useEffect } from 'react';
import { fetchAllQuestions } from './action/question';
import { fetchAllUsers } from './action/users';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers())
  }, [dispatch]);

  return (
    <div >
      <Router>
        <Navbar />
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
