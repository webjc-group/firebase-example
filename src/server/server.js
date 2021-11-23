const express = require('express')
const app = express()
const cors = require('cors')


app.use(cors())

//    catch (err) {
//        console.log("Error del frontend", err)
//    }

// app.post("/message", (req, res)=>{
//     console.log('Estas es el message', req.body)
// })

app.use(require('../routers/routers'))

app.listen(4000, ()=>{
    console.log('App ón port,', 4000)
})