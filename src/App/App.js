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
        <div><SharkTank living={this.state.livingStudents} /></div>
        <button className='btn btn-primary'>bootstrap button</button>
      </div>
    );
  }
}

export default App;
