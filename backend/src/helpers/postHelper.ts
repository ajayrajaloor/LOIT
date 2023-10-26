import { Request, Response } from "express";
import PostModel from "../models/post";



export const submitPostDetails = async (
    userId: string,
    image: string,
    video: string,
    description: string
) => {
    try {
        // Create a new PostModel document
        const newPost = new PostModel({
            userId:userId,
            image:image,
            video:video,
            description:description,
        });

        // Save the document to the database
       const response = await newPost.save()


            return response; // Return the newly created post
    } catch (error) {
        return error
    }
};