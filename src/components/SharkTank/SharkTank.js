import React from 'react';
import PropTypes from 'prop-types';
import studentShape from '../../helpers/propz/studentShape';

import './SharkTank.scss';

import LiveStudent from '../LiveStudent/LiveStudent';

class SharkTank extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
    attackAStudent: PropTypes.func,
  }

  render() {
    const myStudents = this.props.living;
    const { attackAStudent } = this.props;

    const livingCards = myStudents.map((student) => (<LiveStudent key={student.id} student={student} />));

    return (
      <div className='container'>
        <h1>Shark Tank</h1>
        <div className='sharkTank border border-primary'>
          <button className='btn btn-danger m-3' onClick={attackAStudent}>SHARK ATTACK</button>
          <div className='row card-deck'>
            {livingCards}
          </div>
        </div>
      </div>
    );
  }
}

export default SharkTank;
