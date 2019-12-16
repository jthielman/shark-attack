import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';
import studentsData from '../helpers/data/studentsData';

import SharkTank from '../components/SharkTank/SharkTank';

class App extends React.Component {
  state = {
    livingStudents: [],
  }

  componentDidMount() {
    const livingStudents = studentsData.livingStudents();
    this.setState({ livingStudents });
  }

  render() {
    return (
      <div className="App">
        <div className='row'>
          <div className='col-8'><SharkTank living={this.state.livingStudents} /></div>
          <div className='col-4'></div>
        </div>
      </div>
    );
  }
}

export default App;
