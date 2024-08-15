import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Hero from './components/Herosection';


function App() {
  return (
   <div>
      <Navbar/>
      <Hero/>
      <Dashboard />
    </div>
  );
}

export default App;
