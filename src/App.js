import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import Home from './pages/Home'
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import SignUpAuth from './pages/SignUpAuth';
import LoginAuth from './pages/LoginAuth';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ToastContainer theme="dark"/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/> 
          <Route path="/signUp" element={<SignUpAuth/>}/>
          <Route path="/login" element={<LoginAuth/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
    </div>
  );
}

export default App;
