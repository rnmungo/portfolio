import { sendMessage } from '../../services/bot';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }
  
  async talk(message) {
    const data = await sendMessage(message);
    this.updateChatbotState(data.message);
  }
  
  updateChatbotState(message) {
    const chatbotMessage = this.createChatBotMessage(message)
    this.setState(prevState => ({
      ...prevState, messages: [...prevState.messages, chatbotMessage]
    }));
  }
}

export default ActionProvider;
