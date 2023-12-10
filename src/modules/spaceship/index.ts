import { Router } from "express";

import Controller from "./controller";

const router = Router();

router.get("/", Controller.getAll);
router.post("/", Controller.create);
router.patch("/:id", Controller.update);
router.delete("/:id", Controller.remove);

export default router;