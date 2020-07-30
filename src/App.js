import React, { Component } from 'react';
import AddExam from './components/AddExam';
import ViewExam from './components/ViewExams';

class App extends Component {
  state = {
    exams : [],
  }

  addExam = (exam) => {
    this.setState({exams: [...this.state.exams, exam]});
  }

  render(){
    return (
      <div className="body-container">
        <div className="container">
          <AddExam addExam={this.addExam}></AddExam>
          <ViewExam exams={this.state.exams}></ViewExam>
        </div>
      </div>
    );
  }
}

export default App;
