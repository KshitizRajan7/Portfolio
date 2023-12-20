import NavBar from "./components/NavBar/navBar";
import Intro from './components/Intro/intro'
import Skills from "./components/Skills/skills";
// import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import LatestVideo from "./components/LatestVideo/latestVideo";
function App() {
  return (
    <div className="App">
      <NavBar/> 
      <Intro/>
      <LatestVideo/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}
export default App;
