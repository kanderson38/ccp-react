import React, { useState, useEffect } from 'react';
import './Home.scss';
import SetBirdPage from './SetBirdPage';
import BirdList from './BirdList';
import Cockatiel from '../lib/Cockatiel';

function Home() {
  const [motherBird, setMotherBird] = useState(
    new Cockatiel('female', 'Cinnamon'),
  );
  const [fatherBird, setFatherBird] = useState(new Cockatiel('male', 'silver'));
  const [showSetBirdPage, setShowSetBirdPage] = useState(false);
  const [whichBirdToEdit, setWhichBirdToEdit] = useState();
  useEffect(() => {
    console.log(whichBirdToEdit);
    if (whichBirdToEdit) {
      setShowSetBirdPage(true);
    }
  }, [whichBirdToEdit]);

  return (
    <main>
      <div className='main-birdlist'>
        <BirdList
          motherBird={motherBird}
          fatherBird={fatherBird}
          handleEditButtonClick={setWhichBirdToEdit}
        />
        {showSetBirdPage && <SetBirdPage bird={whichBirdToEdit} />}
      </div>
    </main>
  );
}

export default Home;
