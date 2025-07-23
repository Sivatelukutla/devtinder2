const auth = (req,res,next)=>{
    let authCheck = "xy";
    let result = authCheck === "xyz" ? true : false;
    if(!result){
        res.status(400).send("errror in this auth")
    }
    else{
        next()
    }
}

const user = (req,res,next)=>{
    let authCheck = "xyz";
    let result = authCheck === "xyz" ? true : false;
    if(!result){
        res.status(400).send("user is not difend")
    }
    else{
        next()
    }
}
module.exports = {
    auth,user
}