const { count } = require("console")
const orderModel= require("../models/OrderModel")
const productModel = require('../models/productModel')
const userModel = require('../models/useridModel')

const createOrder= async function (req, res) {
    let data = req.body
    let savedData= await orderModel.create(data)
    let productArr = await productModel.find().select({_id:1})
    let ProductId = productArr.map((obj)=>obj._id.toString())
    let UserArr = await userModel.find().select({_id:1})
    let UserId = UserArr.map((obj)=>obj._id.toString())
    if(UserId.includes(data.userId)){
        if(ProductId.includes(data.productId) ){
           return res.send({msg:savedData})
        }return res.send("product id invalid")
    }return res.send("userid invalid")
}

module.exports.createOrder= createOrder