import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';
import studentsData from '../helpers/data/studentsData';

import Graveyard from '../components/Graveyard/Graveyard';
import SharkTank from '../components/SharkTank/SharkTank';

class App extends React.Component {
  state = {
    livingStudents: [],
    departed: [],
  }

  componentDidMount() {
    const livingStudents = studentsData.livingStudents();
    const departed = studentsData.dearlyBeloved();
    this.setState({ livingStudents, departed });
  }

  render() {
    const myStudents = this.state.livingStudents;

    const attackAStudent = (e) => {
      e.preventDefault();
      const randomStudent = myStudents[Math.floor(Math.random() * myStudents.length)];
      if (randomStudent) {
        studentsData.followTheLight(randomStudent.id);
      }
      const livingStudents = studentsData.livingStudents();
      const departed = studentsData.dearlyBeloved();
      this.setState({ livingStudents, departed });
    };

    return (
      <div className="App">
        <div className='row'>
          <div className='col-8'>
            <div className='container'>
              <h1>Shark Tank</h1>
              <div className='sharkTank border border-primary rounded-lg'>
                <button className='btn btn-danger m-3' onClick={attackAStudent}>SHARK ATTACK</button>
                <div className='row card-deck'>
                  <SharkTank living={this.state.livingStudents} />
                </div>
              </div>
            </div>
          </div>
          <div className='col-4'><Graveyard dead={this.state.departed} /></div>
        </div>
      </div>
    );
  }
}

export default App;
