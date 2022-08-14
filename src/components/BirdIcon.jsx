import React from 'react';
import './BirdIcon.scss';

function BirdIcon(props) {
  return (
    <>
      <div className={`${props.mutations.join(' ')} birdrect`}>
        <div className='face'></div>
        <div className='eye'></div>
        <div className='cheek'></div>
        <div className='pied-pattern'></div>
        <div className='pearl-pattern'></div>
        <div className='pearl-pattern'></div>
        <div className='pearl-pattern'></div>
        <div className='pearl-pattern'></div>
        <div className='pearl-pattern'></div>
        <div className='pearl-pattern'></div>
        <div className='pearl-pattern'></div>
      </div>
    </>
  );
}

export default BirdIcon;
