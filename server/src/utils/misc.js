class ClientError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ClientError';
  }
}

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

export { wait, ClientError };
