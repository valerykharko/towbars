import express from "express";
import towbarController from "../../../controllers/catalog/towbarController";
import checkRole from "../../../middlewares/checkRoleMiddleware";

const router = express.Router();

router.post("/", checkRole("ADMIN"), towbarController.create);
router.get("/", towbarController.getAll);
router.get("/:id", towbarController.getOne);

export default router;
