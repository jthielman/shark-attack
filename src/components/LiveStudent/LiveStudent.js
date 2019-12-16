import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSwimmer } from '@fortawesome/free-solid-svg-icons';
import studentShape from '../../helpers/propz/studentShape';


class LiveStudent extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;
    const element = <FontAwesomeIcon icon={faSwimmer} />;

    return (
      <div className="col-6">
        <div className="card">
          <div className="card-body">
            <h6 className="card-title">{student.firstName} {student.lastName}</h6>
            <p className="card-text">still alive {element}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default LiveStudent;
