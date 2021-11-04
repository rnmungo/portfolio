class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    this.actionProvider.talk(message.trim());
  }
}

export default MessageParser;
