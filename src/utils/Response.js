const successResponse = (res, code, data)=>{
    res.status(code).send({
        status:'success',
        data
    })
}

const errorResponse = (res, code, error)=>{
    res.status(code).send({
        status:"error",
        error
    })
}

export {successResponse, errorResponse}