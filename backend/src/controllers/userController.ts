import { Request, Response } from "express";
import { registerUserData,loginUserData} from "../helpers/userHelper";

export const postRegisterUser = async (req: Request, res: Response) => {
  try {
    const credentials = req.body;

    const registerUser = await registerUserData(req, res);

  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};


export const postLoginUser = async(req:Request,res:Response) =>{
    try {
    const loginUser = await loginUserData(req,res)
    if (loginUser?.status === 200) {
        res.json(loginUser);
      } else {
        res.status(401).json(loginUser);
      }
    } catch (error) {
        console.log(error);
        
    }
}