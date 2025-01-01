import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reg from './Components/Reg';
import Signin from './Components/Signin';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
      
      
      <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/reg' element={<Reg/>}/>
            <Route path='/about' element={<About></About>}/>
            <Route path='/contact' element={<Contact></Contact>}/>
            <Route path='/login' element={<Signin></Signin>}/>
            <Route path='/cart' element={<Cart></Cart>}/>
            
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
