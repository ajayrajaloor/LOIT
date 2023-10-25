import { Request, Response } from "express";
import UserModel from "../models/user";
import { comparePassword, hashPassword } from "../services/password";
import { generateJWT } from "../services/jwt";
import { UserDocument } from "../interfaces/userInterface";

export const registerUserData = async (credentials: Request, res: Response) => {
    try {
      let { username, password, email, phoneNumber, profilePic } = credentials.body;
      password = await hashPassword(password);
  
      const newUser = new UserModel({
        username,
        password,
        email,
        phoneNumber,
        profilePic,
      });
  
      await newUser.save();
  
      const token = generateJWT(newUser);
  
      // Return a success response to the client.
      res.status(200).json({ status: 200, usertoken: token });
    } catch (error: any) {
      if (error?.message?.includes("username")) {
        error.msg = "username is already taken";
      } else if (error?.message?.includes("email")) {
        error.msg = "this email is already registered";
      }
  
      // Return an error response to the client.
      res.status(401).json({ status: 401, error });
    }
  };

export const loginUserData = async (
    req: Request,
    res: Response
  ): Promise<{ status: number; userToken?: string; error?: { message: string } }> => {
  try {
    const { emailOrUsername, password } = req.body;

    let user: UserDocument | null = null;

    if (emailOrUsername.includes("@")) {

      user = await UserModel.findOne({ email: emailOrUsername });

      if (!user?.email) {
        throw new Error("Invalid email");
      }
    } else {

      user = await UserModel.findOne({ username: emailOrUsername });

      if (!user?.username) {
        throw new Error("Invalid username");
      }
    }
    const validatePassword = await comparePassword(password, user?.password);

    if (validatePassword) {
      const token = generateJWT(user);
      return { status: 200, userToken: token };
    } else {
      return { status: 400, error: { message: "wrong password" } };
    }

  } catch (error: any) {
    if (error?.message.includes("username")) {
      error.msg = "No account with this username";
    }
    if (error?.message.includes("email")) {
      error.msg = "No account with this email";
    }
    return { status: 401, error };
  }
};
