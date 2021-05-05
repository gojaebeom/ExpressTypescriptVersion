import { Router } from "express";
import { index, show } from "./user.controller";

const router:Router = Router();

router.get("/", index);
router.get("/", show);
// router.post("/", () => console.log("create"));
// router.put("/", () => console.log("update"));
// router.delete("/", () => console.log("delete"));

export default router;