import './App.scss';
import {Header} from "./components/Header/Header";
import {Home} from "./components/Home/Home";
import {AboutMe} from "./components/AboutMe/AboutMe";
import {Portfolio} from "./components/Portfolio/Portfolio";
import {Freelance} from "./components/Freelance/Freelance";
import {Contacts} from "./components/Contacts/Contacts";
import {Footer} from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Home/>
        <AboutMe/>
        <Portfolio/>
        <Freelance/>
        <Contacts/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
