import { Request, Response } from "express";
import { submitPostDetails } from "../helpers/postHelper";


export const submitPost = async (req: Request, res: Response) => {
    try {
        const { userId, image, video, description } = req.body;
        const data = await submitPostDetails(userId, image, video, description);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};