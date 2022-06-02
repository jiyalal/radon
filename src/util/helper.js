const printDate = function(){
    const month = new Date()
    console.log(month);
}

const printmonth = function(){
    const month = new Date()
    console.log(month.getMonth())

}
 const getBatchInfo = function(){
     console.log("Roadon, W3D1, the topic for today is Nodejs module system")
 }

module.exports.printDate = printDate
module.exports.printmonth = printmonth
module.exports. getBatchInfo = getBatchInfo
    
