import { Router } from "express";
import { createListFav, deleteListFavById, getListFavById, getListFavs } from "../controllers/listFav.controller";
import { isAuthenticated } from "../middlewares/authjw";


const router = Router()

router.post("/", isAuthenticated, createListFav)
router.get('/',isAuthenticated, getListFavs)
router.get('/:id', isAuthenticated, getListFavById)
router.delete('/:id', isAuthenticated, deleteListFavById)

export default router