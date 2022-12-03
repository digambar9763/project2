
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Features from './component/Pages/Features';
import HomePage from './component/Pages/HomePage';
import Commercial from './component/Pages/Commercial';
import AboutCompony from './component/Pages/AboutCompony';
function App() {
  return (
    
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/features' element={<Features/>}></Route>
        <Route path='/commercial' element={<Commercial/>}></Route>
        <Route path='/about' element={<AboutCompony/>}></Route>
      </Routes>
         
  );
}

export default App;
