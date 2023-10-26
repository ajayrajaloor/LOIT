import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const verifyAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;    
    if (authHeader) {
      const token = authHeader;
      console.log(token);
      
      jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
        if (err) {
          res.status(401).json({ error: "verification failed", valid: false });
        } else {
          next();
        }
      });
    } else {
      res.status(401).json({ error: "No token provided", valid: false });
    }
  } catch (error : any) {
    res.status(401).json("Verification error");
    console.log(error.message);
  }
};
