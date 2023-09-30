import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login.js'
import Navbar from './components/Navbar.js';
import Button from './components/Button.js';
import Register from './components/Register.js';
import Navbar_register from './components/Navbar_register.js'
function App() {
  return (
    <div className='app'>
      <BrowserRouter>

        <Routes>
          <Route
            path="/login"
            element={
              <div>
                <Navbar /><Login /><Button />
              </div>
            }
          />
        </Routes>
        <Routes>
          <Route
            path='/register'
            element={
              <div>
                <Navbar_register/>
                <Register />
                
              </div>
              }
          />
        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
