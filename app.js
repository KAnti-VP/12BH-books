import express from 'express'

import booksRoutes from './routes/booksRoutes.js'

const app = express()

app.use(express.json())

app.use("/api", booksRoutes)

app.listen(3000, () => {
    console.log(`Server runs on port 3000`)
})
