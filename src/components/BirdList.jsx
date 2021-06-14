import React from 'react';
import './BirdList.scss';
import BirdItem from './BirdItem';

function BirdList(props) {
  function parentsItems() {
    return (
      <ul>
        <BirdItem
          prefix='Mother: '
          bird={props.motherBird}
          handleEditButtonClick={props.handleEditButtonClick}
        />
        <BirdItem
          prefix='Father: '
          bird={props.fatherBird}
          handleEditButtonClick={props.handleEditButtonClick}
        />
      </ul>
    );
  }
  return (
    <div id='birdlist'>
      <ul>{parentsItems()}</ul>
      {/* <ul>
          {chicksItems()}
        </ul> */}
    </div>
  );
}

export default BirdList;
