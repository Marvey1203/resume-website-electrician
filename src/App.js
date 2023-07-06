import './App.css';
import Nav from './Navbar';
import Hero from './Hero';
function App() {
  return (
    <div className="App w-full flex justify-center items-center flex-col">
      
      <div className="w-4/5">
        <Nav />
        <Hero />
      </div>
      
    </div>
  );
}

export default App;
