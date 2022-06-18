const axios = require('axios')

const memePost = async function(req,res){
   try{
    let template_id = req.query.template_id
    let text0 = req.query.text0
    let text1 = req.query.text1
    let username =req.query.username
    let password = req.query.password

    let option = {
        method : 'post',
        url :`https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
    }
    let result = await axios(option)
    let data = result.data
    res.send({msg:data})
   }
   catch(err){
    res.send(err.message)
   }
}
module.exports.memePost = memePost