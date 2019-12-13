import React from 'react';
import PropTypes from 'prop-types';
import studentShape from '../../helpers/propz/studentShape';

class SharkTank extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const myStudents = this.props.living;

    const livingCards = myStudents.map((student) => (<LiveStudent key={student.id} student={student} />));

    return (
      <div className='container'>
        <div className='sharkTank row'>
          {livingCards}
        </div>
      </div>
    );
  }
}

export default SharkTank;
