const _ = require('lodash')

module.exports = (req,res,next) => {
    const bundle = res.locals.bundle
   
    if(bundle.errors) {
        const errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
    } else
        next()
}

function parseErrors($errors) {
    const errors = []
    _.forIn($errors, error => errors.push(error.message))
    // OR
    // Object.keys($errors).forEach(error=>errors.push($errors[error].message) )
    // OR
    // for(const error of Object.keys($errors)) errors.push($errors[error].message)
    // OR
    // for(const error in $errors) { if(!$errors.hasOwnProperty(error)) contunue; errors.push(nodeRestfulErrors[error].message)  }
    return errors
}
