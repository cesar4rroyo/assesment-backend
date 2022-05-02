import express from 'express'
import morgan from 'morgan'


const app = express()

app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.json({
        project: "Backend Assesmment MKR v-12",
        version: "1.0.0",
        author: "Cesar Arroyo",
    })
})


export default app;