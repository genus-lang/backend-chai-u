class ApiErrors extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",
        errors= [],
        statck = ""
    ){
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.errors = errors

        this.sucess = false;

        if(statck){
            this.stack = statck;
        }
        else{
            Error.captureStackTrace(this, this.constructor);
        }

    }


}
export { ApiErrors }