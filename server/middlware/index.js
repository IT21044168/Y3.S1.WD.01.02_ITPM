import jwt from 'jsonwebtoken'

// checks whether the user have a valid session
const requireSignin = (req, res, next) => {
    if(req.headers.authorization){
        const token = req.headers.authorization
        const user = jwt.verify(token, process.env.JWT_SECRET)
        req.user = user
    } 
    else{
        return res.status(400).json({
            message: "Authorization Required!"
        })
    }
    
    next()
}

const filterInputs = (req, res, next) => {
    const body = JSON.stringify(req.body)
    var flags = 0
    const list = ["<", ">", "alert", "or", "=", "script", "/", '`', "NULL", "OR", "AND", "-1", "ORDER", "BY", '+', '-', 'UNION', 'union', 'select', "SELECT", "%"]
    for (let str of list){
        if(body.includes(str)){
            flags++
        }
    }
    if (flags === 0){
        next()
    }
    else if (flags > 0){
        res.status(500).json({
            message: "Potential harmfull payloads in the request"
        })
    }

}


// checks whetherthe user is a normal user
const userMiddleware = (req, res, next) => {
    if(req.user.role !== 'user'){
        return res.status(400).json({
            message: "User access Denied"
        })
    }
    next()
}

// checks whether the user that send the request is an admin
const adminMiddleware = (req, res, next) => {
    if(req.user.role !== 'admin'){
        return res.status(400).json({
            message: "Admin access Denied"
        })
    }
    next()
}

export { adminMiddleware, userMiddleware, requireSignin, filterInputs }