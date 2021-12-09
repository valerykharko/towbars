import express from "express";
import checkRole from "../../../middlewares/checkRoleMiddleware";
import modelController from "../../../controllers/auto/modelController";

const router = express.Router();

router.post("/", checkRole("ADMIN"), modelController.create);
router.get("/", modelController.getAll);
router.get("/:id", modelController.getOne);

export default router;
