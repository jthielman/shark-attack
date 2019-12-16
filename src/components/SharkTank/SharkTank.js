import React from 'react';
import PropTypes from 'prop-types';
import studentShape from '../../helpers/propz/studentShape';

import './SharkTank.scss';

import LiveStudent from '../LiveStudent/LiveStudent';
import studentsData from '../../helpers/data/studentsData';

class SharkTank extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const myStudents = this.props.living;

    const livingCards = myStudents.map((student) => (<LiveStudent key={student.id} student={student} />));

    const attackAStudent = (e) => {
      e.preventDefault();
      const randomStudent = myStudents[Math.floor(Math.random() * myStudents.length)];
      studentsData.followTheLight(randomStudent.id);
      console.log(randomStudent.id, 'is dead?', randomStudent.isDead);
      const students = studentsData.livingStudents();
      this.setState({ students });
    };

    return (
      <div className='container'>
        <h1>Shark Tank</h1>
        <div className='sharkTank border border-primary rounded-lg'>
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
