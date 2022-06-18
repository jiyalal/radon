const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (abcd, xyz) {
  //You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
  let data = abcd.body;
  let savedData = await userModel.create(data);
  console.log(abcd.newAtribute);
  xyz.send({ msg: savedData });
};

const loginUser = async function (req, res) { 
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

  // Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret
  // The same secret will be used to decode tokens
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FUnctionUp",
    },
    "functionup-radon"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
};

const getUserData = async function (req, res) {
  let decodedToken = jwt.verify(token, "functionup-radon");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};
  // if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error
  
  // If a token is present then decode the token with verify function
  // verify takes two inputs:
  // Input 1 is the token to be decoded
  // Input 2 is the same secret with which the token was generated
  // Check the value of the decoded token yourself
  

const updateUser = async function (req, res) {
  let userId = req.params.userId; 
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: true, data: updatedUser });
};
// Do the same steps here:
// Check if the token is present
// Check if the token present is a valid token
// Return a different error message in both these cases
// let token =req.headers["x-auth-token"]

  // let user = await userModel.findById(userId);
//   let decodedToken = jwt.verify(token, 'functionup-radon')
  //Return an error if no user with the given id exists in the db
  // if(!token) return res.send("token not valid")
  //  if (!user) {
  //   return res.send("No such user exists");
  
//}
// if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
// let userToBeModified = req.params.userId
// //userId for the logged-in user
// let userLoggedIn = decodedToken.userId
// if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

 

const postMessage = async function (req, res) {
    let message = req.body.message
   

    let user = await userModel.findById(req.params.userId)
    // if(!user) return res.send({status: false, msg: 'No such user exists'})
    
    let updatedPosts = user.posts
    //add the message to user's posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})

    //return the updated user document
    return res.send({status: true, data: updatedUser})
}
let deleteTrue = async function(req,res){
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, {$set:{isDeleted:true}},{new:true});
    res.send({status :true, data : updatedUser})
}
 // Check if the token is present
    // Check if the token present is a valid token
    // Return a different error message in both these cases
    // let token = req.headers["x-auth-token"]
    // if(!token) return res.send({status: false, msg: "token must be present in the request header"})
    // let decodedToken = jwt.verify(token, 'functionup-radon')

    // if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
    
    // //userId for which the request is made. In this case message to be posted.
    // let userToBeModified = req.params.userId
    // //userId for the logged-in user
    // let userLoggedIn = decodedToken.userId

    // //userId comparision to check if the logged-in user is requesting for their own data
    // if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
  // let token = req.headers["x-auth-token"]
  // let userId = req.params.userId
  // let decodedToken = jwt.verify(token, 'functionup-radon')

  //   if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
  //    let userToBeModified = req.params.userId
  //   //userId for the logged-in user
  //   let userLoggedIn = decodedToken.userId

  //   //userId comparision to check if the logged-in user is requesting for their own data
  //   if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

  // if(!token) {
  //   return res.send("bhag yaha se")
  // }else{
    

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage
module.exports.deleteTrue = deleteTrue  