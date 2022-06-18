let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

const getSession = async function(req,res){
    try {
        let id = req.query.district_id
        let date = req.query.date
        // console.log(`query params are: ${id} ${date}`)
        let option = {
            method : 'get',
            url : `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`
        }
        let result = await axios(option)
        let data = result.data
        res.status(200).send({msg:data})

    }
    catch (err){
        res.status(500).send(err.message)
    }
}
const getWeather = async function(req,res){
    try {
         let q = req.query.q
        // let appid = req.query.appid
        let option = {
            method: 'get',
            url : `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=602bb347aaa79e64cf8f8135c5b849ba`
        }
        let result = await axios(option)
        let data = result.data
        res.status(200).send({msg:data})
    }
    catch(err){
        res.status(500).send(err.message)
    }
}
const getSorted =async function(req,res){
    try{
        let cities = [ "Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let sortedCity = []
        for(i = 0;i< cities.length;i++){
            let obj = {city:cities[i]}
            
            let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=602bb347aaa79e64cf8f8135c5b849ba`)
            obj.temp = resp.data.main.temp
            sortedCity.push(obj)
        }
        let sorted = sortedCity.sort(function(a,b){return a.temp - b.temp})
        res.status(200).send({data:sorted})
    }
    catch (err){
        res.status(500).send(err.message)
    }
}
const getImages= async function(req,res){
     try{
        let option ={
        method: 'get',
        url: `https://api.imgflip.com/get_memes`
     }
     let result = await axios(option)
     let data = result.data
     res.status(200).send({mag : data})
    }
    catch(err){
        res.status(500).send(err.message)
    }
}
const memePost = async function(req,res){
    try{
    let {template_id, text0,text1,username,password} = req.query
    
    let option = {
        method : 'post',
        url :`https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
    }
    let result = await axios(option)
    let data = result.data
    res.status(201).send({msg:data})
}
catch(err){
    res.status(500).send(err.message)
}
}
module.exports.memePost = memePost
module.exports.getSorted = getSorted
module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getSession = getSession
module.exports.getWeather = getWeather
module.exports.getImages = getImages