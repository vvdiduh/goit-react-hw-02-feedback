import React, { Component } from 'react';
import Statistics from './Statistics';
import { Title } from './App.styled';

class App extends Component {
  state = {
    good: 2,
    neutral: 1,
    bad: 3,
  };

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (good, neutral, bad) => {
    return Math.round((good * 100) / (good + neutral + bad));
  };

  render() {
    // const { good } = this.state;
    // const { neutral } = this.state;
    // const { bad } = this.state;

    return (
      <>
        <Title>Будь ласка залиште відгук</Title>
        <ul>
          <li>
            <button>Неймовірно</button>
          </li>
          <li>
            <button>Добре</button>
          </li>
          <li>
            <button>Можна краще</button>
          </li>
        </ul>
        <Statistics />
      </>
    );
  }
}

export default App;
