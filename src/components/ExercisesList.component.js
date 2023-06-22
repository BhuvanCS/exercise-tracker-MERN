import React from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Exercise from './Exercise';

function ExercisesList(props){
    const [exercises, setExercises] = React.useState([]);

    React.useEffect(() => {
        axios.get("http://localhost:3000/exercises")
            .then((res) => {
                setExercises(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    })
    function delExercise(id){
        axios.delete("http://localhost:3000/exercises/" + id)
            .then((res) => console.log(res));

            //delete the exercise from the state variable
        setExercises((prev) => {
            return (
                prev.filter((exercise) => exercise._id !== id)
            )
        })
    }
    function getExercises(){
        return (
            exercises.map((exercise) => {
                return (
                    <Exercise key = {exercise._id} exercise={exercise} delExercise = {delExercise} />
                )
            })
        )
    }
    return(
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Username</th>
                <th>Exercise Description</th>
                <th>Exercise Duration</th>
                <th>Date</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                {getExercises()}
            </tbody>
        </Table>
    ) 
}

export default ExercisesList;