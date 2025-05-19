<<<<<<< HEAD
import './resource/css/App.css';
import Header from "./templates/Header";
import Footer from "./templates/Footer";
import Homepage from "./pages/Homepage";
import {Route, Routes, useLocation} from "react-router-dom";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ResidentialService from "./pages/ResidentialService";
import CommercialService from "./pages/CommercialService";
import ProjectKohima from "./pages/ProjectKohima";
import ProjectDeck from "./pages/ProjectDeck";
import AboutUs from "./pages/AboutUs";
import ProjectCastorBay from "./pages/ProjectCastorBay";
import ProjectCozy from "./pages/ProjectCozy";

function App() {
    const location = useLocation()

    const openCloseRequestForm =()=> {
        const el = document.getElementById('RequestForm')
        const styles = window.getComputedStyle(el)
        if (styles.getPropertyValue("display") === 'none'){
            el.style.display = 'block'
            document.getElementById("popup-fade").classList.remove('hidden')
            document.getElementById("popup-fade").classList.add('visible')
        }else{
            el.style.display='none'
            document.getElementById("popup-fade").classList.remove('visible')
            document.getElementById("popup-fade").classList.add('hidden')
        }
    }
    return (
        <div className={'page ' + (location.pathname === '/services' ? 'background' : '')}>
            <Header openCloseRequestForm={openCloseRequestForm}/>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/services/residential" element={<ResidentialService openCloseRequestForm={openCloseRequestForm}/>}/>
                <Route path="/services/commercial" element={<CommercialService openCloseRequestForm={openCloseRequestForm}/>}/>
                <Route path="/aboutUs" element={<AboutUs/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/projects/2" element={<ProjectDeck/>}/>
                <Route path="/projects/3" element={<ProjectKohima/>}/>
                <Route path="/projects/4" element={<ProjectCastorBay/>}/>
                <Route path="/projects/5" element={<ProjectCozy/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
=======
import React, { useState } from "react";

export default function App() {
  const [length, setLength] = useState(10);
  const [material, setMaterial] = useState("wood");
  const [difficulty, setDifficulty] = useState("normal");
  const [location, setLocation] = useState("auckland");
  const [quote, setQuote] = useState(null);

  const calculateQuote = () => {
    const lengthM = parseFloat(length);
    const postCount = Math.ceil(lengthM / 2) + 1;
    const railingMeters = lengthM * 3;
    const railings = Math.ceil(railingMeters / 4);
    const pickets = Math.ceil(lengthM / 0.105);
    const nails = pickets * 6;
    const bolts = postCount * 6;
    const cementBags = postCount * 3;

    const materialCosts = {
      wood: { post: 25, railing: 12, picket: 3, nail: 0.05, bolt: 1.5, cement: 13.98, work: 80 },
      metal: { post: 25, railing: 12, picket: 5, nail: 0.05, bolt: 1.5, cement: 13.98, work: 100 },
      composite: { post: 25, railing: 12, picket: 6, nail: 0.05, bolt: 1.5, cement: 13.98, work: 110 },
    };

    const price = materialCosts[material];

    const materialTotal =
      postCount * price.post * 1.1 +
      railings * price.railing * 1.1 +
      pickets * price.picket * 1.1 +
      nails * price.nail * 1.1 +
      bolts * price.bolt * 1.1 +
      cementBags * price.cement * 1.1;

    let labour = lengthM * price.work;
    if (difficulty === "high") labour *= 1.15;
    if (location === "remote") labour *= 1.1;

    const total = Math.round(materialTotal + labour);

    setQuote({ materialTotal: materialTotal.toFixed(2), labour: labour.toFixed(2), total });
  };

  return (
    <main className="max-w-xl mx-auto mt-10 p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Cyeta — AI Fence Quote</h1>
      <div className="space-y-3">
        <label className="block">
          Fence Length (m)
          <input type="number" value={length} onChange={(e) => setLength(e.target.value)} className="w-full p-2 border rounded mt-1" />
        </label>
        <label className="block">
          Material
          <select value={material} onChange={(e) => setMaterial(e.target.value)} className="w-full p-2 border rounded mt-1">
            <option value="wood">Wood</option>
            <option value="metal">Metal</option>
            <option value="composite">Composite</option>
          </select>
        </label>
        <label className="block">
          Difficulty
          <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className="w-full p-2 border rounded mt-1">
            <option value="normal">Normal</option>
            <option value="high">High</option>
          </select>
        </label>
        <label className="block">
          Location
          <select value={location} onChange={(e) => setLocation(e.target.value)} className="w-full p-2 border rounded mt-1">
            <option value="auckland">Within 100km of Auckland</option>
            <option value="remote">100km+</option>
          </select>
        </label>
        <button onClick={calculateQuote} className="bg-blue-600 text-white px-4 py-2 rounded">Calculate Quote</button>

        {quote && (
          <div className="mt-4">
            <p>💰 Materials: ${quote.materialTotal}</p>
            <p>🛠️ Labour: ${quote.labour}</p>
            <p className="font-bold text-xl">Total Estimate: ${quote.total}</p>
          </div>
        )}
      </div>
    </main>
  );
}
>>>>>>> c43333e2778157f1e0441ae18d98e9604fa96989
