import { useState } from 'react';
import Chatbot from 'react-chatbot-kit'
import { UilCommentDots } from '@iconscout/react-unicons'
import Fade from '@mui/material/Fade';
import config from './config';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';

const FrankyBot = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Fade in={show}>
        <div className="chat__container">
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
            placeholderText="Escriba su mensaje aquí"
            validator={(inputText) => inputText.trim() !== ''}
          />
        </div>
      </Fade>
      <div
        className="button--fab chat__fab"
        onClick={() => setShow(prevState => !prevState)}
      >
        <UilCommentDots className="button--fab__icon" />
      </div>
    </>
  );
};

export default FrankyBot;
