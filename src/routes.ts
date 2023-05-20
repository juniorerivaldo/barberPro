import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { UpdateUserController } from "./controllers/user/updateUserController";

const router = Router();

// rotas user
router.post("/users", new CreateUserController().handle); // .handle sem () pois dentro do arquivo vai chamar a funçao handle
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);
router.put("/users",isAuthenticated,new UpdateUserController().handle)



export { router };
