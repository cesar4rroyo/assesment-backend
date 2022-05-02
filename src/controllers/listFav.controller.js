import jsonwebtoken from "jsonwebtoken";
import { 
    createListFavService, 
    deleteListFavByIdService, 
    getListFavByIdService, 
    getListFavsService, 
    updateListFavByIdService 
} from "../services/listFav.service.js";
import { decodeToken } from "../services/auth.service.js";


export const createListFav = async (req, res) => {
    try {
        const token = req.headers["x-access-token"];
        if (!token) throw new Error(`token is required`);
        const user = decodeToken(token);
        const listFav = await createListFavService(req, user);
        res.status(200).json({
            message: "List Fav created successfully",
            listFav
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating List Fav: " + error.message,
            error
        })
    }
}

export const getListFavs = async (req, res) => {
    try {
        const listFavs = await getListFavsService(req);
        res.status(200).json({
            message: "List Favs retrieved successfully",
            listFavs
        });
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving List Favs: " + error.message,
            error
        })
    }
}

export const getListFavById = async (req, res) => {
    try {
        const listFav = await getListFavByIdService(req);
        res.status(200).json({
            message: "List Fav retrieved successfully",
            listFav
        });
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving List Fav: " + error.message,
            error
        })
    }
}

export const updateListFavById = async (req, res) => {
    try {
        const listFav = await updateListFavByIdService(req);
        res.status(200).json({
            message: "List Fav updated successfully",
            listFav
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating List Fav: " + error.message,
            error
        })
    }
}

export const deleteListFavById = async (req, res) => {
    try {
        const listFav = await deleteListFavByIdService(req);
        res.status(200).json({
            message: "List Fav deleted successfully",
            listFav
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting List Fav: " + error.message,
            error
        })
    }
}