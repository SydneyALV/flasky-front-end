// import logo from './logo.svg';
import './App.css';
import CrystalList from './components/CrystalList.js'
import React from 'react'
import axios from 'axios'

const crystalData = [
  {
    id: 1,
    name: "Amethyst",
    color: "Purple",
    powers: "Infinite knowledge and wisdom",
    charges: 0
  },
  {
    id: 2,
    name: "Tiger's Eye",
    color: "Orange",
    powers: "Confidence and strength",
    charges: 0
  },
  {
    id: 3,
    name: "Rose Quartz",
    color: "Pink",
    powers: "Love",
    charges: 0
  }
]

function App() {
  const cohort = "Atlanta C19";
  const title = `The ${cohort} Crystal Cove`
  const [crystals, setCrystals] = React.useState(crystalData)

  React.useEffect(() => {
    axios.get('http://127.0.0.1:5000/crystals')
    .then(resp => {
      setCrystals(resp.data)
    })
    .catch(resp => {
      console.log("Could not load crystals.")
    })
  }, [])

  const increaseCharge = (id) => {
    axios.patch(`http://127.0.0.1:5000/crystals/${id}`)
    .then(resp => {
      setCrystals(prevCrystals => {
        const updatedCrystals = prevCrystals.map(crystal => {
          return crystal.id === id ? {...crystal, charges: crystal.charges + 1}: crystal
        })
        return updatedCrystals
      })
    })
  }
  
  const removeCrystal = (id) => {
    axios.delete(`http://127.0.0.1:5000/crystals/${id}`)
    .then(() => {
      setCrystals(prevCrystals => {
        const updatedCrystals = prevCrystals.filter(crystal => crystal.id !== id)
        return updatedCrystals
      })
    })
  }

  const totalCharges = () => {
    let total = 0;
    for (let crystal of crystals) {
      total += crystal.charges
    }
    return total
  }

  return (
    <div className="App">
      <header>
        <h1>{title}</h1>
        <p>Total Charges: {totalCharges()}</p>
      </header>
      <main>
        <CrystalList crystals={crystals} removeCrystal={removeCrystal} increaseCharge={increaseCharge} />
      </main>
    </div>
  );
}

export default App;
