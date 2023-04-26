const { v4: uuidv4 } = require('uuid');

const savePersonValidity = (req, res, next) => {
    const person = req.body
    // const keys = Object.keys(person)
    // for(let k of keys){
    //     if(!person[k]){
    //         return res.send('please write required properties value')
    //     }
    // }
    if (!person.name || !person.address || !person.photoUrl || !person.contact || !person.gender) {
        return res.send('please write required properties value')
    }
    req.decoded = uuidv4()
    // req.body._id = uuidv4()
    next()
}

module.exports = { savePersonValidity }