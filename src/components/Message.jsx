import React from 'react';
import { withTheme } from 'styled-components';

import { MessageBlobBot, MessageBlobUser } from '../primitives/MessageBlob';
import Avatar from '../primitives/Avatar';
import AnswerButton from '../primitives/AnswerButton';
import Image from '../primitives/Image';

const Message = (props) => {
  const { message, active, theme } = props;

  return (
    <section>
      {message.sender === 'BOT' ?
        <div>
          <Avatar left>
            {theme.bot ? theme.bot :
              <img src={require("../assets/bot.png")} style={{ height: '45px', width: '45px' }} />
            }
          </Avatar>
          <MessageBlobBot>
            {message.text}
          </MessageBlobBot>
          {message.image &&
            <Image>
              <img src={message.image} alt={message.text} />
            </Image>
          }
          {message.buttons && active &&
            <div>
              {message.buttons.map((button, index) =>
                <AnswerButton key={index} onClick={() => props.onButtonSelect(button)}>
                  {button.text}
                </AnswerButton>
              )}
            </div>
          }
          {/*message.type === 'final' &&
            Object.keys(answers).map((answer, index) =>
              <div key={index}>
                {answer}
                <span>{answers[answer]}</span>
              </div>
            )
          */}
        </div>
        :
        <div style={{ height: "60px" }}>
          {/* <Avatar right>
            {theme.user ? theme.user :
              <img src={require("../assets/bot.png")} style={{ height: '45px', width: '45px' }} />
            }
          </Avatar> */}
          <MessageBlobUser>
            {message.text}
          </MessageBlobUser>
        </div>
      }
    </section>
  );
}

export default withTheme(Message);
