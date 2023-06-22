import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CreateUser(props){
    const navigate = useNavigate();
    const [username, setUsername] = React.useState("");

    function onChange(event){
        setUsername(event.target.value);
    }

    function onSubmit(event){
        event.preventDefault();
        const user = {
            username: username
        }
        console.log(user);

        //make a HTTP request to the backend
        axios.post("http://localhost:3000/users/add", user)
            .then((res) => {
                console.log(res.data);
            })
        setUsername("");  
        navigate("/");  
    }
    return (
        <div>
            <h2 className = "mb-4">Create User</h2>
            <Form onSubmit = {onSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className = "fw-normal">Username</Form.Label>
                    <Form.Control name = "username" onChange = {onChange} value = {username} type="text"  />
                </Form.Group>
                <Button type = "submit" variant="dark">Create User</Button>
            </Form>
        </div>
       
    );
}

export default CreateUser;