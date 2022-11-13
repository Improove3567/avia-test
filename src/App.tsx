import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Avia from './pages/aviaPage/Avia';
import AviaInfo from './pages/aviaInfoPage/AviaInfo';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Avia />}></Route>
        <Route path='/avia-card' element={<AviaInfo />}></Route>
      </Routes>
    </>
  );
}

export default App;
