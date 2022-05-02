import Fav from "../models/fav.model.js"

export async function createFavService(req) {
    const {title, description, link} = req.body
    const fav = await Fav.create(
        {
            title, 
            description, 
            link
        }
    )
    return fav
}

export async function getFavsService(req) {
    const favs = await Fav.find()
    return favs
}

export async function getFavByIdService(req) {
    const fav = await Fav.findById(req.params.id)
    return fav
}

export async function updateFavByIdService(req) {
    const {title, description, link} = req.body
    const fav = await Fav.findByIdAndUpdate(req.params.id, {
        title, 
        description, 
        link
    }, {new: true})
    return fav
}

export async function deleteFavByIdService(req) {
    const fav = await Fav.findByIdAndDelete(req.params.id)
    return fav
}