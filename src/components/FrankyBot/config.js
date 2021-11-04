import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import { UilRobot, UilUser } from '@iconscout/react-unicons';
import MuiAvatar from '@mui/material/Avatar';
import Header from './Header';

const config = { 
  botName: "FrankyBot",
  initialMessages: [createChatBotMessage("¡Suuuuupeeer!")],
  customComponents: {
   // Replaces the default header
   header: () => <Header title="Preguntale a Franky sobre Rodrigo" />,
   // Replaces the default bot avatar
   botAvatar: () => <MuiAvatar className="chat__avatar"><UilRobot /></MuiAvatar>,
   // Replaces the default bot chat message container
   // botChatMessage: (props) => <CustomChatMessage {...props} />,
   // Replaces the default user icon
   userAvatar: () => <MuiAvatar className="chat__avatar"><UilUser /></MuiAvatar>,
   // Replaces the default user chat message
   // userChatMessage: (props) => <MyUserChatMessage {...props} />
 },
};

export default config;
