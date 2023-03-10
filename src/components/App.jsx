import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Section from './Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 3,
    bad: 0,
  };

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (good, neutral, bad) => {
    return Math.round((good * 100) / (good + neutral + bad));
  };

  addFeedback = feedback => {
    this.setState(prevState => {
      return {
        [feedback]: prevState[feedback] + 1,
      };
    });
  };

  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;

    return (
      <Section title="Будь ласка залиште відгук">
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.addFeedback}
        />
        {this.countTotalFeedback(good, neutral, bad) > 0 ? (
          <>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          </>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }
}

export default App;
