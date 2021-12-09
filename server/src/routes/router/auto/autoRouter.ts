import express from "express";
import checkRole from "../../../middlewares/checkRoleMiddleware";
import autoController from "../../../controllers/auto/autoController";

const router = express.Router();

router.post("/", checkRole("ADMIN"), autoController.create);
router.get("/", autoController.getAll);
router.get("/:id", autoController.getOne);

export default router;
