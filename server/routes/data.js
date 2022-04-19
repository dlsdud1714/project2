var express = require("express");
var router = express.Router();
const findAllBusinessTofetch =require('../db/loadInitialData')

router.get("/", async (req,res)=>{
    try{
        const response = await findAllBusinessTofetch();
        
        res.send(response)
        
    }catch(err){
        
    console.log(err.message)
    }
})


module.exports = router;