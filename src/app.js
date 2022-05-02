import express from 'express'
import morgan from 'morgan'
import authRoutes from './routes/auth.routes.js'
import listFavRoutes from './routes/listFav.routes.js'

const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        project: "Backend Assesmment MKR v-12",
        version: "1.0.0",
        author: "Cesar Arroyo",
    })
})

app.use('/api/favs', listFavRoutes)
app.use('/api/local', authRoutes)


export default app;