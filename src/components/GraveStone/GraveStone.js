import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkull } from '@fortawesome/free-solid-svg-icons';
import studentShape from '../../helpers/propz/studentShape';

class GraveStone extends React.Component {
  static propTypes = {
    corpse: studentShape.studentShape,
  }

  render() {
    const { corpse } = this.props;
    const skull = <FontAwesomeIcon icon={faSkull} />;

    return (
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h6 className="card-title">{corpse.firstName} {corpse.lastName}</h6>
            <p className="card-text">{skull}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default GraveStone;
