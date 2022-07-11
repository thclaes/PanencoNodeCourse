import { NextFunction, Request, Response } from "express";
import { UserStore } from './user.store';

export const update = async (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);
  const user = UserStore.get(id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  const updated = UserStore.update(id, req.body);
  res.locals.body = updated; // Set the result on the locals object to pass it to the representation middleware.
  next(); // call next so the representation middleware is actually fired
};