//routes 
const {Router} = require('express')
const router = Router()

router.get('/test' , (req,res)=>{
    const data= {
        "name":"Norma",
        "lastname":"Carrillo",
        "age":"25",
        "email":"ncarrillo@teste.com"
    }
    res.json(data)
})

module.exports = router;