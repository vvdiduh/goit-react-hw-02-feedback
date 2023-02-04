import React, { Component } from 'react';

class Statistics extends Component {
  render() {
    return (
      <>
        <h2> Статистика </h2>
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
export default Statistics;
