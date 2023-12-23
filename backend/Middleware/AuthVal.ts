import mongoose from "mongoose";
import asyncHandler from "express-async-handler";

import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { log } from "console";

export interface IRequest extends Request {
  user?: JwtPayload;
}

export const VToken = async (
  req: IRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    const token = authHeader.split(" ")[1];

    try {
      const decoded = jwt.verify(
        token,
        process.env.Secret as string
      ) as JwtPayload;
      const user = decoded.user;
      req.user = user;

      return next();
    } catch (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export const Admin = async (
  req: IRequest,
  res: Response,
  next: NextFunction
) => {
  if (!req.user || !req.user.isAdmin) {
    return res.status(403).json({ message: "Access Denied" });
  }

  // User is an admin, proceed with next middleware or route handler
  return next();
};
