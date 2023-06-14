const router = require('express').Router();
let Exercise = require('../models/exercise.models');

//API Endpoints
router.route('/').get((req, res) => {
    Exercise.find({})
    .then((exercise) => { return res.json(exercise)})
    .catch((err) => { return res.status(400).json('Error: '+ err)})
})

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    const newExercise = new Exercise({username, description, duration, date});
    newExercise.save()
    .then(() => {return res.json("New exercise added!")})
    .catch((err) => {return res.status(400).json('Error: '+ err)})
})

router.route('/:id')
    .get((req, res) => {
        Exercise.findById(req.params.id)
        .then((exercise) => {return res.json(exercise)})
        .catch((err) => {return res.status(400).json('Error' + err.message)})
    })
    .delete((req, res) => {
        Exercise.findByIdAndDelete(req.params.id)
        .then(() => {return res.json("Excercise deleted successfully!")})
        .catch((err) => {return res.status(400).json('Error' + err.message)})
    })

router.route('/:id').patch((req, res) => {
    Exercise.findByIdAndUpdate(
        req.params.id,
        {username: req.body.username, description: req.body.description, duration: Number(req.body.duration), date: (req.body.date)},
        {new: true}
    )
    .then(() => {return res.json("Succesfully updated!")})
    .catch(err => {return res.status(400).json('Error: ' + err.message)})
})

module.exports = router;