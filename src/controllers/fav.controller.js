import { 
    createFavService, 
    deleteFavByIdService, 
    getFavByIdService, 
    getFavsService, 
    updateFavByIdService 
} from "../services/fav.service.js";


export const createFav = async (req, res) => {
    try {
        const fav = await createFavService(req);
        res.status(201).json({
            message: "Fav created successfully",
            fav
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating fav: " + error.message,
            error   
        })
    }
}

export const getFavs = async (req, res) => {
    try {
        const favs = await getFavsService(req);
        res.status(200).json({
            message: "Favs retrieved successfully",
            favs
        });
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving favs: " + error.message,
            error
        })
    }
}

export const getFavById = async (req, res) => {
    try {
        const fav = await getFavByIdService(req);
        res.status(200).json({
            message: "Fav retrieved successfully",
            fav
        });
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving fav: " + error.message,
            error
        })
    }
}

export const updateFavById = async (req, res) => {
    try {
        const fav = await updateFavByIdService(req);
        res.status(200).json({
            message: "Fav updated successfully",
            fav
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating fav: " + error.message,
            error
        })
    }
}

export const deleteFavById = async (req, res) => {
    try {
        const fav = await deleteFavByIdService(req);
        res.status(200).json({
            message: "Fav deleted successfully",
            fav
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting fav: " + error.message,
            error
        })
    }
}