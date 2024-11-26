const express = require('express')
const router = express.Router()

router.get('/fetch',(require,response) => {
    //response.send("List of viewers")    
    response.json({
        "name":"nebuchadnezar",
        "age":"50"

    })    
})

router.post('/insert',(request,response) => {
    response.json({
        "message":"Success!"
    })
})

module.exports = router