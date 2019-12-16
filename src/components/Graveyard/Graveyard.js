import React from 'react';
import PropTypes from 'prop-types';
import studentShape from '../../helpers/propz/studentShape';

import './Graveyard.scss';

import GraveStone from '../GraveStone/GraveStone';

class Graveyard extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const corpses = this.props.dead;

    const stoneCards = corpses.map((corpse) => (<GraveStone key={corpse.id} corpse={corpse} />));

    return (
      <div className='container'>
        <h1>Graveyard</h1>
        <div className='graveyard row border border-info rounded-lg card-deck'>
          {stoneCards}
        </div>
      </div>
    );
  }
}

export default Graveyard;
