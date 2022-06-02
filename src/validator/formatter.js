const trim  = function(){
    const a = " functionUp  "
    const b =a.trim()
    console.log(b)
}
const changeToLowerCase =  function(){
    const c = "All Letters In Lower Case"
    const d =c.toLowerCase()
    console.log(d)
}
const changeToUpperCase = function(){
    const e = "ALL Letter In Upper Case"
    const f = e.toUpperCase()
    console.log(f)
}

module.exports.trim = trim
module.exports.changeToLowerCase = changeToLowerCase
module.exports.changeToUpperCase = changeToUpperCase