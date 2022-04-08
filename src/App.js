import './App.css';
import {Header} from "./components/Header/Header";
import {MainBanner} from "./components/MainBanner/MainBanner";
import {Skills} from "./components/Skills/Skills";
import {Portfolio} from "./components/Portfolio/Portfolio";
import {RemoteWork} from "./components/RemoteWork/RemoteWork";
import {Contacts} from "./components/Contacts/Contacts";
import {Footer} from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <MainBanner/>
        <Skills/>
        <Portfolio/>
        <RemoteWork/>
        <Contacts/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
