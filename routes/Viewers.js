const express = require('express')
const router = express.Router()

router.get('/fetch',(request,response) => {
    //response.send("List of viewers")    
    /*response.json({
        "name":"nebuchadnezar",
        "age":"50"

    })*/
   //response.send(request.query);
   console.log(request.body);
})

router.post('/insert',(request,response) => {
    response.json({
        "message":"Success!"
    })
})

module.exports = router