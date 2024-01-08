const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");
const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function jwtSign(username,password){

    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if(!usernameResponse.sucess || !passwordResponse.sucess){
        return null;
    }
    const signature = ({
        username,
    },jwtPassword)

    return signature;
}


//write a function that takes jwt as input and return true if the jwt can be verified,else return false;
function verifyJwt(Token){
       const verfied = jwt.verifiy(token,jwtPassword)
       if(verfied){
            return true;
       }
       else{
        return false;
       }
    }
//write a function that takes jwt as input and return true if the jwt can be decoded(not verified otherwise),else return false;
function decodedjwt(token){
    const decoded = jwt.decode(token);
    if(decoded){
        return true;
    }
    else{
        return false;
    }
}