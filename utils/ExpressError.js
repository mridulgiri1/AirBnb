class ExpressError extends Error {
  //Extends:- Used to create a child class(ExpressError) from a parent class(Error).//
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

module.exports = ExpressError;
