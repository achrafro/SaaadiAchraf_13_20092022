import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './pages/Footer/Footer';
import Main from './pages/Main/Main';
import ProjectRoutes from './ProjectRoutes';

 
function App() {
   
  return (
    <div className="App">
    <ProjectRoutes></ProjectRoutes>
    </div>
  );
}

export default App;
