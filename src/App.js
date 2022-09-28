import './App.css';
import { Bags } from './components/Bags';
import { Banner } from "./components/Banner"
import { Discription } from './components/Discription';
import { Dresses } from './components/Dresses';
import { Footer } from './components/Footer';
import { Guide } from './components/Guide';
import { Navbar } from './components/NavBar';
import { Subscribe } from './components/Subscribe';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Discription/>
      <Dresses/>
      <Guide/>
      <Bags/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
