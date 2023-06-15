// import logo from './logo.svg';
import './App.css';
import CrystalList from './components/CrystalList.js'

const crystalData = [
  {
    id: 1,
    name: "Amethyst",
    color: "Purple",
    powers: "Infinite knowledge and wisdom"
  },
  {
    id: 2,
    name: "Tiger's Eye",
    color: "Orange",
    powers: "Confidence and strength"
  },
  {
    id: 3,
    name: "Rose Quartz",
    color: "Pink",
    powers: "Love"
  }
]

function App() {
  const cohort = "Atlanta C19";
  const title = `The ${cohort} Crystal Cove`

  return (
    <div className="App">
      <header>
        <h1>{title}</h1>
      </header>
      <main>
        <CrystalList crystals={crystalData}/>
      </main>
    </div>
  );
}

export default App;
