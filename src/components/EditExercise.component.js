import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DatePicker from 'react-datepicker'
import {useNavigate} from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";


function EditExercise(props){
    const navigate = useNavigate();
    const [currUser, setCurrUser] = React.useState({
        username: "",
        description: "",
        duration: 0,
        date: new Date(),
        users: []
    })
    const id = window.location.pathname.substring(6)//Remove the "/edit" from the pathname "/edit/id"
    //Lifecycle method which is called everytime page is loaded
    React.useEffect(() => {
        //Get current exercise details
        axios.get("http://localhost:3000/exercises/"+ id)
            .then((res) => {
                setCurrUser((prev) => {
                    return {
                        ...prev,
                        username: res.data.username,
                        description: res.data.description,
                        duration: res.data.duration,
                        date: new Date(res.data.date)
                    }
                })
            })
            .catch((err) => console.log(err));
        //Get the list of all users from the DB using axios
        axios.get("http://localhost:3000/users")
            .then((res) => {
                if(res.data.length > 0) {
                    setCurrUser((prev) => {
                        return {
                            ...prev,
                            users: res.data.map((user) => {
                                return user.username;
                            }),
                        }
                    })
                }
            })
    }, [])

    function onChange(event){
        setCurrUser((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }

        })
    }

    function onSubmit(event) {
        event.preventDefault();
        const exercise = {
            username: currUser.username,
            description: currUser.description,
            duration: currUser.duration,
            date: currUser.date
        }
        console.log(exercise);
        axios.patch("http://localhost:3000/exercises/"+id, exercise)
            .then((res) => {
                console.log(res);
            })
        //redirect to homepage
        navigate('/');
    }
    return (
        <div>
        <h3 className = "mb-3">Edit Exercise Log</h3>
            <Form onSubmit = {onSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Username</Form.Label>
                 <Form.Select name = "username" onChange = {onChange} value = {currUser.username}aria-label="Default select example">
                {
                    currUser.users.map(function (user, ind) {
                        return (
                            <option key = {ind} value={user}>{user}</option>
                        )
                    })
                }
            </Form.Select>
            </Form.Group>
           
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Desription</Form.Label>
                <Form.Control name = "description" onChange = {onChange} value = {currUser.description} as="textarea" rows={2} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Duration in mins</Form.Label>
                <Form.Control name = "duration" onChange = {onChange} value = {currUser.duration} type="text" />
            </Form.Group>
            <DatePicker onChange = {(date) => { 
                return setCurrUser((prev) => {
                    return {...prev, date: date}}) 
                }} selected = {currUser.date} className = "mb-3" />
            <br />
            <Button type = "submit" variant="dark">Edit Exercise Log</Button>

            </Form>
        </div>
    )
}

export default EditExercise;