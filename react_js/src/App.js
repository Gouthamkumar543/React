import logo from './logo.svg';
import './App.css';
import NavBar from './WebSite/NaveBar/NavBar';
import Content from './WebSite/Content/Content';
import { Footer } from './WebSite/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
