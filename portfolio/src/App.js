import './App.css';
import {Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import ProjectsPage from './Pages/ProjectsPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
