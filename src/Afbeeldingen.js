import React, { Component } from 'react';
import AfbeeldingenRenderen from './AfbeeldingenRenderen.js'
import './css/Afbeeldingen.css';

class Afbeeldingen extends Component {

  render() {
    const currentQuestion = this.props.data;

    return (
      <div className= 'Afbeeldingen'>
        <h1>{currentQuestion.question}</h1>
        {currentQuestion.answers.map((answer, i) =>
          <AfbeeldingenRenderen
            key={i}
            number={i}
            plaatje={answer}
            answerClicked={this.props.handleUserAnswer}
            currentQuestion={this.props.questionNumber}
            />
        )}
      </div>
    );
  }
}

export default Afbeeldingen;
