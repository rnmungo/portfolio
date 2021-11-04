class ClientError extends Error {
  constructor(message, statusCodeMessage, statusCode, data) {
    super(message);
    this.name = 'ClientError';
    this.code = statusCodeMessage;
    this.status = statusCode;
    this.data = data;
  }
};

export default ClientError;
