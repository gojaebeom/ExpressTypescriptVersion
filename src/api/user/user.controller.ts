import { Request, Response } from "express";

//index
export async function index(req:Request, res:Response) {
    console.log("요청옴!");
    res.status(200).json({ message : "hello" });
}

export async function show(req:Request, res:Response) {
    console.log("요청옴!");
    res.status(200).json({ message : "hello" });
}