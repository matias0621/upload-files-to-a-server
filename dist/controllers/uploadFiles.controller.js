"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadPost = void 0;
const uploadPost = (req, res) => {
    res.status(201).json({
        message: "Files upload succesfully",
        file: req.file
    });
};
exports.uploadPost = uploadPost;
