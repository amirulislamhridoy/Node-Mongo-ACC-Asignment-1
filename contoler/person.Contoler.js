let persons = [
  {
    _id: "6448efa0296c9f1539bdad43",
    photoUrl: "http://placehold.it/32x32",
    name: "Jacqueline Stephens",
    gender: "female",
    contact: "+1 (806) 513-2559",
    address: "771 Cass Place, Grayhawk, Florida, 9651"
  },
  {
    _id: "6448efa096492c2d9fa39005",
    photoUrl: "http://placehold.it/32x32",
    name: "Mercado Drake",
    gender: "male",
    contact: "+1 (873) 587-3913",
    address: "657 Manor Court, Dunnavant, Indiana, 3200"
  },
  {
    _id: "6448efa0f3e422c8d7ad1156",
    photoUrl: "http://placehold.it/32x32",
    name: "Mooney Holder",
    gender: "male",
    contact: "+1 (927) 480-3573",
    address: "514 Girard Street, Healy, New Jersey, 1360"
  },
  {
    _id: "6448efa04d0318b983472f32",
    photoUrl: "http://placehold.it/32x32",
    name: "Sloan Schneider",
    gender: "male",
    contact: "+1 (997) 475-2937",
    address: "572 Gotham Avenue, Bartley, Maryland, 2475"
  },
  {
    _id: "6448efa0561a7598232fcbfe",
    photoUrl: "http://placehold.it/32x32",
    name: "Nina Oconnor",
    gender: "female",
    contact: "+1 (810) 470-2887",
    address: "327 Hill Street, Nile, Delaware, 7845"
  },
  {
    _id: "6448efa011ba0968900acfd2",
    photoUrl: "http://placehold.it/32x32",
    name: "Hooper Davidson",
    gender: "male",
    contact: "+1 (850) 487-2525",
    address: "456 Heyward Street, Crenshaw, West Virginia, 1835"
  },
  {
    _id: "6448efa03cdeb9e0bb4f3f0c",
    photoUrl: "http://placehold.it/32x32",
    name: "Leola Whitaker",
    gender: "female",
    contact: "+1 (929) 600-2679",
    address: "607 Vermont Court, Leland, Maine, 209"
  },
  {
    _id: "6448efa05b8d18adfe7a7e27",
    photoUrl: "http://placehold.it/32x32",
    name: "Bette Henry",
    gender: "female",
    contact: "+1 (999) 573-2227",
    address: "129 Maple Avenue, Retsof, American Samoa, 1878"
  },
  {
    _id: "6448efa055df44ce295dd289",
    photoUrl: "http://placehold.it/32x32",
    name: "England Crane",
    gender: "male",
    contact: "+1 (897) 437-2433",
    address: "441 Monroe Place, Calvary, Vermont, 5532"
  },
  {
    _id: "6448efa087e5c744d4d42b6c",
    photoUrl: "http://placehold.it/32x32",
    name: "Tammie Kramer",
    gender: "female",
    contact: "+1 (936) 474-3708",
    address: "694 Cooper Street, Bridgetown, Alabama, 3024"
  },
  {
    _id: "6448efa08e6d252b2e0c4d5e",
    photoUrl: "http://placehold.it/32x32",
    name: "Campos Blevins",
    gender: "male",
    contact: "+1 (893) 406-2556",
    address: "811 Joralemon Street, Balm, New York, 3456"
  },
  {
    _id: "6448efa014131b313ee64ff8",
    photoUrl: "http://placehold.it/32x32",
    name: "Cassandra Graham",
    gender: "female",
    contact: "+1 (878) 535-2433",
    address: "650 Hyman Court, Zortman, Michigan, 5042"
  },
  {
    _id: "6448efa0142ef08de887909b",
    photoUrl: "http://placehold.it/32x32",
    name: "Lee Wyatt",
    gender: "female",
    contact: "+1 (873) 463-3652",
    address: "921 Ridgecrest Terrace, Tonopah, Georgia, 498"
  },
  {
    _id: "6448efa0a094ed95c92b2ab3",
    photoUrl: "http://placehold.it/32x32",
    name: "Mcbride Newman",
    gender: "male",
    contact: "+1 (995) 590-2242",
    address: "829 Brighton Avenue, Waverly, Illinois, 8060"
  },
  {
    _id: "6448efa08a0b0fdeda2b7bfa",
    photoUrl: "http://placehold.it/32x32",
    name: "Mclean Anthony",
    gender: "male",
    contact: "+1 (828) 487-3160",
    address: "581 Essex Street, Hannasville, Idaho, 7308"
  }
]

module.exports.randomPerson = (req, res) => {
  const n = Math.round(Math.random() * (persons.length - 1))
  const data = persons[n]
  res.status(200).send(data)
}
module.exports.getAllPerson = (req, res) => {
  const { limit } = req.query
  res.send(persons.slice(0, limit))
}

module.exports.savePerson = (req, res) => {
  let person = req.body
  person._id = req.decoded
  persons.push(person)
  res.send('person is saved')
}
module.exports.updatePerson = async (req, res) => {
  const { id } = req.params
  const { address, gender, name, photoUrl, contact } = req.body
  let newPerson = persons.find(p => p._id === id)
  if (!newPerson) {
    return res.send('Please send valid person.')
  }
  newPerson.address = address
  newPerson.gender = gender
  newPerson.name = name
  newPerson.photoUrl = photoUrl
  newPerson.contact = contact
  persons = [...persons.filter(p => p._id !== id), newPerson]
  res.send(persons)
}
module.exports.updateMultiplePerson = async (req, res) => {
  const data = req.body
  const a = data.forEach(({_id: id, address, gender, name, photoUrl, contact}) => {
    if (!id) { return res.send('please send valid id of every person') }
    let newPerson = persons.find(p => p._id === id)
    if(!address||!gender||!address||!name||!photoUrl||!contact){return res.send('Please write all required value.')}
    if (!newPerson) { return res.send('Please send valid person.') }
    newPerson.address = address
    newPerson.gender = gender
    newPerson.name = name
    newPerson.photoUrl = photoUrl
    newPerson.contact = contact
    persons = [...persons.filter(p => p._id !== id), newPerson]
  })
  res.send('multiple user is updated')
}
module.exports.deletePerson = (req, res, next) => {
  const {id} = req.params
  if(id){return res.send('please send valid user id')}
  persons = [...persons.filter((person) => person._id !== id)]
  res.send('person is deleted')
}