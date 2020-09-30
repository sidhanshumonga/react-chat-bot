import React from 'react';
import Conversation from '../containers/Conversation';

const theme = {
  blobColor: '#F15A29',
  userBlobColor: 'black',
  // user: '👀',
  // bot: '😾',
  baseColor: '#ccc',
  font: "DM sans",
  height: '90vh',
  width: '35vw',
};

const questions = [{
    text: 'Hi, Welcome to Brick&bolt. How can we help you?',
  }, {
    text: 'What is your first name?',
    key: 'firstName',
  }, {
    text: 'How are you?',
    key: 'emotion',
    buttons: [{
      text: 'Awesome!',
      value: 'great',
    }, {
      text: 'Good',
      value: 'good',
    }, {
      text: 'Could be better',
      value: 'medium',
    }, {
      text: 'Not so good...',
      value: 'bad',
    }]
  }, {
    text: 'Do you like this image?',
    key: 'imageLike',
    image: 'https://unsplash.it/400/300/?random',
    buttons: [{
      text: 'Yes, looks great!',
      value: 'yes',
    }, {
      text: 'No really...',
      value: 'no',
    }]
}];

const App = (props) => {
  function getUserAnswers(answers) {
    console.log('answers', answers);
  }

  return (
    <main>
      <Conversation
        questions={questions}
        onEnded={getUserAnswers}
        theme={theme}
      />
    </main>
  );
}

export default App;
