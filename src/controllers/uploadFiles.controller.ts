import { Request, Response } from "express";

export const uploadPost = (req: Request, res: Response) => {
    res.status(201).json({
        message: "Files upload succesfully",
        file: req.file as Express.Multer.File
    })
}