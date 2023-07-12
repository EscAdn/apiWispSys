import { Router } from "express";
import {
  validateRegister,
  validateLogin,
} from "./../validators/users.validators";
import { 
  addUser, 
  loginUser, 
  getUsers, 
  updatedUser, 
  deleteUser, 
  getUser 
} from "./../controllers/users.controller";

const route = Router();

route.post("/register", validateRegister, addUser);
route.post("/login", validateLogin, loginUser);
route.get("/", getUsers);
route.get("/:id", getUser)
route.put("/:id", validateRegister, updatedUser)
route.delete("/:id", deleteUser)


export default route;
