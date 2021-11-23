const { Router } = require('express')
const router = Router()

router.get("/app", (req, res)=>{
    res.send('desde es el router')
    console.log('Estas en el router')
})

router.post("/name", async (req, res)=>{
   try {
       let name = req.
     res.send(`Nombre recibido. El nombre es: ${name}`)
   }
   catch (err) {
       console.log("Error del frontend", err)
   }
})

module.exports = router