import React, { useEffect, useState } from 'react';
import BirdList from './BirdList';
import './Radiogroup.scss';

function Radiogroup(props) {
  const { gene, gender, setGeneFunction } = props;
  const [checkedValue, setCheckedValue] = useState(gene.genePair);

  function handleInputClick(e) {
    console.log('lid', e);
    setGeneFunction(
      gene.names[0].replace(' ', '-').toLowerCase(),
      e.currentTarget.value,
    );
    setCheckedValue(e.currentTarget.value);
  }

  switch (gene.inheritanceMode) {
    case 'recessive': {
      return (
        <li>
          <h2>{gene.names}</h2>
          <div role='radiogroup' className='radiogroup-container'>
            <input
              type='radio'
              id={`visual-button-${gene.names[0]}`}
              value='00'
              onChange={handleInputClick}
              checked={checkedValue === '00'}
              name={`radiogroup-${gene.names[0]}`}
            ></input>
            <label htmlFor={`visual-button-${gene.names[0]}`}>Visual</label>
            <input
              type='radio'
              id={`split-button-${gene.names[0]}`}
              value='0-'
              onChange={handleInputClick}
              checked={checkedValue === '0-'}
              name={`radiogroup-${gene.names[0]}`}
            ></input>
            <label htmlFor={`split-button-${gene.names[0]}`}>Split</label>

            <input
              type='radio'
              id={`none-button-${gene.names[0]}`}
              value='--'
              onChange={handleInputClick}
              checked={checkedValue === '--'}
              name={`radiogroup-${gene.names[0]}`}
            ></input>
            <label htmlFor={`none-button-${gene.names[0]}`}>None</label>
          </div>
        </li>
      );
    }
    case 'sex-linked': {
      return (
        <li>
          <h2>{gene.names}</h2>
          <div role='radiogroup' className='radiogroup-container'>
            <input
              type='radio'
              id={`visual-button-${gene.names[0]}`}
              value={gender === 'female' ? '0Y' : '00'}
              onChange={handleInputClick}
              checked={checkedValue === '0Y' || checkedValue === '00'}
              name={`radiogroup-${gene.names[0]}`}
            ></input>
            <label htmlFor={`visual-button-${gene.names[0]}`}>Visual</label>
            {gender === 'male' ? (
              <>
                <input
                  type='radio'
                  id={`splitX1-button-${gene.names[0]}`}
                  value='0-'
                  onChange={handleInputClick}
                  checked={checkedValue === '0-'}
                  name={`radiogroup-${gene.names[0]}`}
                ></input>
                <label htmlFor={`splitX1-button-${gene.names[0]}`}>
                  Split (X1)
                </label>
                <input
                  type='radio'
                  id={`splitX2-button-${gene.names[0]}`}
                  value='-0'
                  onChange={handleInputClick}
                  checked={checkedValue === '-0'}
                  name={`radiogroup-${gene.names[0]}`}
                ></input>
                <label htmlFor={`splitX2-button-${gene.names[0]}`}>
                  Split (X2)
                </label>
              </>
            ) : (
              ''
            )}
            <input
              type='radio'
              id={`none-button-${gene.names[0]}`}
              value={gender === 'female' ? '-Y' : '--'}
              checked={checkedValue === '-Y' || checkedValue === '--'}
              onChange={handleInputClick}
              name={`radiogroup-${gene.names[0]}`}
            ></input>
            <label htmlFor={`none-button-${gene.names[0]}`}>None</label>
          </div>
        </li>
      );
    }
    case 'parblue': {
      return '';
    }
    default: {
      return '';
    }
  }
}

export default Radiogroup;
