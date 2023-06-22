import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {useNavigate} from 'react-router-dom';

function Exercise(props) {
    const navigate = useNavigate();
    return (
        <tr>
            <td>{props.exercise.username}</td>
            <td>{props.exercise.description}</td>
            <td>{props.exercise.duration}</td>
            <td>{props.exercise.date.substring(0,10)}</td>
            <td>
            <EditIcon type = "button" onClick= {()=>{
                navigate("/edit/"+props.exercise._id)
            }}/>
            <span className = "mx-2">|</span>
            <DeleteIcon type = "button" onClick={() => {
                    props.delExercise(props.exercise._id);
                }}/>
            </td>
        </tr>
    )
}

export default Exercise;