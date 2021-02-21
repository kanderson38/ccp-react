import React, { useState } from "react";
import "./Home.css";
import SetBirdPage from "./SetBirdPage";
import BirdList from "./BirdList";
import Bird from "../lib/Bird";

function Home() {
  const [motherBird, setMotherBird] = useState(new Bird("female", "Cinnamon"));
  const [fatherBird, setFatherBird] = useState(new Bird("male"));
  const [showSetBirdPage, setShowSetBirdPage] = useState(false);
  const [whichBirdToSet, setWhichBirdToSet] = useState({birdInfo: {bird: undefined, func: () => {}}});

  function loadSetBirdPage(bird, func) {
    setShowSetBirdPage(true);
    console.log(func);
    setWhichBirdToSet({birdInfo: {bird, func}});
  }

  
  return (
    <main>
      <BirdList motherBird={motherBird} fatherBird={fatherBird} />
      <SetBirdPage bird={whichBirdToSet.birdInfo.bird} setBirdFunction={whichBirdToSet.birdInfo.func} showPage={setShowSetBirdPage} />
    </main>
  )
}

export default Home;