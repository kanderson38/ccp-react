import React from 'react';
import BirdIcon from './BirdIcon';
import './BirdItem.scss';

function BirdItem(props) {
  console.log(props);
  return (
    <li>
      <span>
        {props.prefix} {props.bird.genotypeInWords}
      </span>
      <button
        type='button'
        className='open-form-button'
        onClick={() => props.handleEditButtonClick(props.bird)}
      >
        Change
      </button>
      <BirdIcon mutations={props.bird.phenotype} />
    </li>
  );
}

export default BirdItem;
