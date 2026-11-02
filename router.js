import { Router } from "express"
import PerfumeController from "./PerfumeController.js"

const router = new Router()


router.get("/perfume" , PerfumeController.getPerfume)
router.post("/addPerfume" , PerfumeController.addPerfume)
router.patch("/perfume/:id",PerfumeController.pathPerfume)
router.delete("/deletePerfume/:id",PerfumeController.deletePerfume)


export default router;