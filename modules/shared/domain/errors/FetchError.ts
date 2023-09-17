class FetchError extends Error {
  constructor(readonly message: string, readonly status: number) {
    super(message);
  }
}

export default FetchError;
