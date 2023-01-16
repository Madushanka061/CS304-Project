import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavScroll from "./components/Navbar/NavScroll";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { BrowserRouter, Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Create from './Create';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <NavScroll />
        </div>
{/* 
        <Register />
        <Login to="/login"/> */}
      </header>

      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
       </Routes>
      </Router>

    </div>
  );
}

export default App;
