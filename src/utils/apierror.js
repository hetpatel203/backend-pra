class apierror extends Error {
  constructor(
    statusCode, 
    message="something went wrong",
error = [],
stack = ""
 ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors;
    this.data = null;
    this.success = false;

    if(stack){
        this.stack = stack;

    }
    else{ 
        error.captureStackTrace(this, this.constructor);
    }
  }
}
export {apierror}