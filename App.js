import logo from './logo.svg';
import './App.css';
import Header from './Header/Header'
import Contact from './MainComponent/ContactInfo';
import Info from './Header/Info';
import FBSkills from './Header/FBSkills';
import Footer from './Footer/Footer';
import Project from './Project/Project';
import Qualification from './Qualification/Qual';
// import server1 from './Server';


function App() {
  return (
    <div id="body">
      <Header />
      <Contact />
      <Info />
      <FBSkills />
      <Qualification />
      <Project />
      <Footer/>
      </div>

  );
}


export default App;
