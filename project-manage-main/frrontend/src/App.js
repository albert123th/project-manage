import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import { Signup } from './Components/Signup';
import { Home } from './Components/ Home';





function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* Redirect '/' to '/home' */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
