const router = require('express').Router();
let User = require('../models/user.models');

//API Endpoints
router.route('/').get((req, res) => {
    User.find({})
    .then((user) => { return res.json(user)})
    .catch((err) => { return res.status(400).json('Error: '+ err)})
})

router.route('/add').post((req, res) => {
    console.log(req.body);
    const username = req.body.username;
    const newUser = new User({username});
    newUser.save()
    .then(() => {return res.json("New user added!")})
    .catch((err) => {return res.status(400).json('Error: '+ err)})
})

module.exports = router;