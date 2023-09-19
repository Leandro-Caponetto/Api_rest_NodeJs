const customHeader = (req, res, next) => {

    try{
        const apiKey = req.headers.api_key;
        if(apiKey === 'leife-01'){

            next()
        }else{
            res.status(403)
            res.send({error:"API_KEY_IS_NOT_FOUND"})
        }


    }catch{
        res.status(403)
        res.send({error:"Something went wrong with the CUSTOM HEADER"})
    }
}




module.exports = customHeader;