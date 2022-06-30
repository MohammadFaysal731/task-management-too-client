import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calendar from './components/Calendar';
import CompletedTasks from './components/CompletedTasks';
import Header from './components/Header';
import Home from './components/Home';
import ToDo from './components/ToDo';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/completedtasks' element={<CompletedTasks></CompletedTasks>}></Route>
        <Route path='/todo' element={<ToDo></ToDo>}></Route>
        <Route path='/calendar' element={<Calendar></Calendar>}></Route>
      </Routes>
    </div>
  );
}

export default App;
