import jwt from "jsonwebtoken";

export const generateJWT =  (data:{}) => {
    try {
        const token =  jwt.sign(JSON.stringify(data),process.env.JWT_SECRET as string) 
    return token
    } catch (error : any) {
        console.log(error.message);
        
    }
}   