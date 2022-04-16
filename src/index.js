const express = require('express')
const app = express()
const morgan = require('morgan')
const port= process.env.PORT || 3010

// settings
app.set('port', port);
app.set('json spaces',2)


//middleware
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//routes
app.use(require('./routes/index'))
app.use('/api/clientes',(require('./routes/clientes')))



//starting server
app.listen(port, ()=>{
    console.log(`Server on port ${port}`)
})

