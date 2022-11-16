import './App.css';
import {Route,Routes} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Booking from './routes/Booking';
import Contact from './routes/Contact';
import Profile from './routes/Profile';
import Login   from './routes/Login';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/contactus' element={<Contact/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>          
    </div>
    
  );
}

export default App;
   