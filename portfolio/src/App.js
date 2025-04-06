import './App.css';
import {Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import ProjectsPage from './Pages/ProjectsPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

/*
    Small Details List:
    - Change swaping pages to scroll up quickly or nice animation instead of a weird cut
    - Hover Effects for Icons. Ex Github, Email, Resume, LinkedIn
    - Figure out scaling for icons in work and Education (Might involve making the chain longer to scale the border to be smaller)

*/


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
