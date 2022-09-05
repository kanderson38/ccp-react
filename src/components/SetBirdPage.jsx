import React from 'react';
import Radiogroup from './Radiogroup';
import './SetBirdPage.scss';

function SetBirdPage(props) {
  const { bird, setFunction, showFunction, open } = { ...props };
  function setGeneFunction(name, value) {
    const gene = bird.genotype[name];

    gene.genePair = value;
    setFunction(bird);
  }

  const radiogroups = Object.keys(bird.genotype).map((key) => {
    return (
      <Radiogroup
        key={key}
        setGeneFunction={setGeneFunction}
        gene={bird.genotype[key]}
        gender={bird.gender}
      />
    );
  });

  return (
    open && (
      <div className={`set-bird-page`}>
        <p className='description'>Set {bird.gender}'s type</p>

        <div>
          <ul>{radiogroups}</ul>
        </div>
        <button
          onClick={() => {
            showFunction(false);
          }}
        >
          Save
        </button>
      </div>
    )
  );
}

export default SetBirdPage;
