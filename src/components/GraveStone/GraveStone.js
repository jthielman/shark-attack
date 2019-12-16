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
      <div className="col-6">
        <div className="card m-2">
          <div className="card-body">
            <p className="card-text">{skull}</p>
            <p className="card-title">{corpse.firstName} {corpse.lastName}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default GraveStone;
