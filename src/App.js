// import logo from './logo.svg';
import './App.css';
import CrystalList from './components/CrystalList.js'

function App() {
  const cohort = "Atlanta C19";
  return (
    <div className="App">
      <h1>{cohort} Crystal Cove</h1>
      <CrystalList />
    </div>
  );
}

export default App;
