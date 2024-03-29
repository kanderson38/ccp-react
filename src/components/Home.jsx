import React, { useState, useEffect } from 'react';
import './Home.scss';
import SetBirdPage from './SetBirdPage';
import BirdList from './BirdList';
import Cockatiel from '../lib/Cockatiel';
import Pair from '../lib/Pair';

function Home() {
  const [motherBird, setMotherBird] = useState(
    new Cockatiel('female', 'Mother:'),
  );
  const [fatherBird, setFatherBird] = useState(
    new Cockatiel('male', 'Father:'),
  );
  const newPair = new Pair(motherBird, fatherBird);
  const { femaleChicks, maleChicks } = newPair.breed();
  const formattedFemaleChicks = [];
  const formattedMaleChicks = [];
  for (const chick of femaleChicks) {
    formattedFemaleChicks.push({ bird: chick });
  }
  for (const chick of maleChicks) {
    formattedMaleChicks.push({ bird: chick });
  }
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
                setShowSetBirdPage(true);
                setWhichBirdToEdit(e);
              },
            },
            {
              bird: fatherBird,
              buttonAction: (e) => {
                setShowSetBirdPage(true);
                setWhichBirdToEdit(e);
              },
            },
          ]}
          headerText='Parents'
        />
        <BirdList
          birdsAndActions={formattedFemaleChicks}
          headerText='Female Chicks'
        />
        <BirdList
          birdsAndActions={formattedMaleChicks}
          headerText='Male Chicks'
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
