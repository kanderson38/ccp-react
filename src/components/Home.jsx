import React, { useState, useEffect } from 'react';
import './Home.scss';
import SetBirdPage from './SetBirdPage';
import BirdList from './BirdList';
import Cockatiel from '../lib/Cockatiel';

function Home() {
  const [motherBird, setMotherBird] = useState(
    new Cockatiel('female', 'Mother:'),
  );
  const [fatherBird, setFatherBird] = useState(
    new Cockatiel('male', 'Father:'),
  );
  const [showSetBirdPage, setShowSetBirdPage] = useState(false);
  const [whichBirdToEdit, setWhichBirdToEdit] = useState(fatherBird);

  return (
    <main>
      <div className='main-birdlist'>
        <BirdList
          birdsAndActions={[
            {
              bird: motherBird,
              buttonAction: (e) => {
                console.log('buttonAction', e);
                setShowSetBirdPage(true);
                setWhichBirdToEdit(e);
              },
            },
            {
              bird: fatherBird,
              buttonAction: (e) => {
                console.log('buttonAction', e);
                setShowSetBirdPage(true);
                setWhichBirdToEdit(e);
              },
            },
          ]}
          headerText='Parents'
        />
        <SetBirdPage
          bird={whichBirdToEdit}
          open={showSetBirdPage}
          showFunction={setShowSetBirdPage}
          setFunction={
            whichBirdToEdit.gender === 'male' ? setFatherBird : setMotherBird
          }
        />
      </div>
    </main>
  );
}

export default Home;
