const { randomPerson, getAllPerson, savePerson, updatePerson, updateMultiplePerson, deletePerson } = require('../../contoler/person.Contoler')
const { savePersonValidity } = require('../../middleware/savePersonValidity')

const router = require('express').Router()

router.get('/random', randomPerson)
router.get('/getAllPerson', getAllPerson)

router.route('/person').post(savePersonValidity,savePerson)
router.route('/person/bulk-update').patch(updateMultiplePerson) // jodi ami ai line ta next line ar pore dei taile aita kaj korbe na karon dynamic tai sob access niye nibe
router.route('/person/:id').patch(updatePerson).delete(deletePerson)

module.exports = router