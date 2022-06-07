const bookModel = require("../models/bookModel")


const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const bookList= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.find().select({bookName: 1, authorName: 1, _id:0})
    res.send({msg: savedData})
}

const getBooksInYear = async (req, res) => {
    let data = req.query.year
    
    let book = await  BookModel.find({year:{$eq:data}}).select({bookName:1, _id:0})
    res.send({msg: book})
}

const getParticularBooks = async (req, res) =>{
    let condition = req.query
    let Books = await bookModel.find(condition).select({bookName:1,_id:0})
    // console.log(condition)
    res.send({msg: Books})
    // console.log(Books)
}

const getXINRBooks = async (req, res) => {
    let book = await BookModel.find( {"prices.indianPrice": [100, 200, 500]})//{ "prices.indianPrice": { $in: ["100INR", "200INR", "500INR"] } }

    res.send({msg: book})
}

const getRandomBooks = async (req, res) => {
    let books = await BookModel.find({$or: [{"prices.indianPrice": "500INR"}, {$gte:{"totalPages": 500}}]})

    res.send({msg: books})
}


module.exports.createBook=createBook

module.exports.bookList=bookList

module.exports.getBooksInYear=getBooksInYear

module.exports.getParticularBooks=getParticularBooks

module.exports.getXINRBooks=getXINRBooks

module.exports.getRandomBooks= getRandomBooks