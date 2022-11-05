import './App.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Albums from './Albums/Albums';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Albums />
    </div>
  );
}

export default App;
