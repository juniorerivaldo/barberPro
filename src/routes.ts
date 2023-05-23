import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { UpdateUserController } from "./controllers/user/UpdateUserController";
import { CreateHairCutController } from "./controllers/haircut/CreateHairCutController";
import { ListHairCutController } from "./controllers/haircut/ListHairCutController";

// middlewares
import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

// rotas user
router.post("/users", new CreateUserController().handle); // .handle sem () pois dentro do arquivo vai chamar a funçao handle
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);
router.put("/users", isAuthenticated, new UpdateUserController().handle);

// rotas de haircut
router.post("/haircut", isAuthenticated, new CreateHairCutController().handle);
router.get("/haircuts", isAuthenticated, new ListHairCutController().handle);

export { router };
