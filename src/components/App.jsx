import React, { Component } from 'react';
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
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;

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
        <h2>Статистика</h2>
        <ul>
          <li>
            <p>Неймовірно: {good}</p>
          </li>
          <li>
            <p>Добре: {neutral}</p>
          </li>
          <li>
            <p>Можна краще: {bad}</p>
          </li>
          <li>
            <p>
              Кількість відгуків: {this.countTotalFeedback(good, neutral, bad)}
            </p>
          </li>
          <li>
            <p>
              Кількість позитивних відгуків:{' '}
              {this.countPositiveFeedbackPercentage(good, neutral, bad)}%
            </p>
          </li>
        </ul>
      </>
    );
  }
}

export default App;
