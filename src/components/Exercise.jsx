import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Exercise(props) {
    return (
        <tr>
            <td>{props.exercise.username}</td>
            <td>{props.exercise.description}</td>
            <td>{props.exercise.duration}</td>
            <td>{props.exercise.date.substring(0,10)}</td>
            <td>
            <DeleteIcon type = "button" onClick={() => {
                    props.delExercise(props.exercise._id);
                }}/>
            <span className = "mx-2">|</span>
            <EditIcon type = "button" onClick={() => {

            }}/>

            </td>
        </tr>
    )
}

export default Exercise;