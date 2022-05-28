import express from "express";
import StatisticsController from "../../../controllers/statistics/statisticsController";

const router = express.Router();

router.post("/orders", StatisticsController.getOrdersByDate);

export default router;
