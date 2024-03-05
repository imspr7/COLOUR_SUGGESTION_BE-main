import express from "express";
import UserRoutes from "./user.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send(`
    <h1 style="text-align:center">Welcome to Daily Dress Colour Suggestion</h1>`);
});
router.use("/", UserRoutes);

export default router;
