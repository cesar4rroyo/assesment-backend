import ListFav from "../models/listFav.model.js"


export async function createListFavService(req) {
    const listFav = await ListFav.create(req.body)
    return listFav.populate("user").populate("favs")
}

export async function getListFavsService(req) {
    const listFavs = await ListFav.find()
    listFavs.forEach(listFav => {
        listFav.populate("user").populate("favs")
    })
    return listFavs
}

export async function getListFavByIdService(req) {
    const listFav = await ListFav.findById(req.params.id)
    return await listFav.populate("user").populate("favs")
}

export async function updateListFavByIdService(req) {
    const listFav = await ListFav.findByIdAndUpdate(req.params.id, req.body, {new: true})
    return await listFav.populate("user").populate("favs")
}

export async function deleteListFavByIdService(req) {
    const listFav = await ListFav.findByIdAndDelete(req.params.id)
    return []
}