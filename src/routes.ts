import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { UpdateUserController } from "./controllers/user/UpdateUserController";

import { CreateHairCutController } from "./controllers/haircut/CreateHairCutController";
import { ListHairCutController } from "./controllers/haircut/ListHairCutController";
import { UpdateHairCutController } from "./controllers/haircut/UpdateHairCutController";
import { CheckSubscriptionController } from "./controllers/haircut/CheckSubscriptionController";
import { CountHairCutController } from "./controllers/haircut/CountHairCutController";
import { DetailHairCutController } from "./controllers/haircut/DetailHairCutController";

import { NewScheduleController } from "./controllers/schedule/NewScheduleController";
import { ListScheduleController } from "./controllers/schedule/ListScheduleController";

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
router.put("/haircut", isAuthenticated, new UpdateHairCutController().handle);
router.get('/haircut/check', isAuthenticated, new CheckSubscriptionController().handle);
router.get('/haircut/count', isAuthenticated, new CountHairCutController().handle);
router.get('/haircut/detail', isAuthenticated, new DetailHairCutController().handle);

// rotas de servico
router.post('/schedule', isAuthenticated, new NewScheduleController().handle);
router.get('/schedule',isAuthenticated, new ListScheduleController().handle)

export { router };
