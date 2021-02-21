import React from 'react';
import PropTypes from 'prop-types';

function BirdList(props) {
  function parentsItems() {
    return (
      <ul>
        <li>
          Mother:
          {props.motherBird.phenotype}
          <button type="button" onClick={() => console.log('done')}>Change</button>
        </li>
        <li>
          Father:
          {props.fatherBird.phenotype}
          <button type="button" onClick={() => console.log('Fine')}>Change</button>
        </li>
      </ul>
    );
  }
  return (
    <div id="birdlist">
      <ul>
        {parentsItems()}
      </ul>
      {/* <ul>
          {chicksItems()}
        </ul> */}
    </div>
  );
}

export default BirdList;
BirdList.propTypes = {
  fatherBird: PropTypes.objectOf(PropTypes.object).isRequired,
  motherBird: PropTypes.objectOf(PropTypes.object).isRequired,
};
