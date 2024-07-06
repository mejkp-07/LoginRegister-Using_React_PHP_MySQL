import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import Login from './Login.js';
import Register from './Register.js';
import Header from './Header.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
