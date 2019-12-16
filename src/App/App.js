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
    return (
      <div className="App">
        <div className='row'>
          <div className='col-8'><SharkTank living={this.state.livingStudents} /></div>
          <div className='col-4'><Graveyard dead={this.state.departed} /></div>
        </div>
      </div>
    );
  }
}

export default App;
