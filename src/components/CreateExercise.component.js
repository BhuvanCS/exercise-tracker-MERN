import React from 'react';
import Form from 'react-bootstrap/Form';

function CreateExercise(props){
    const [currUser, setCurrUser] = React.useState({
        username: "",
        description: "",
        duration: 0,
        date: new Date(),
        users: []
    })

    //Lifecycle method which is called everytime page is loaded
    React.useEffect(() => {
        setCurrUser((prev) => {
            return {
                ...prev,
                users: ['Test User A', 'Test User B'],
                username: 'Test User A'
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
    }
    return (
        <div>
            <Form onSubmit = {onSubmit}>
            <Form.Select aria-label="Default select example">
                {
                    currUser.users.map(function (user) {
                        return (
                            <option value={user}>{user}</option>
                        )
                    })
                }
            </Form.Select>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Desription</Form.Label>
                    <Form.Control onChange = {onChange} as="textarea" rows={2} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Duration in mins</Form.Label>
                    <Form.Control onChange = {onChange} type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Date</Form.Label>
                    <Form.Control onChange = {onChange} type="text" />
                </Form.Group>
            </Form>
        </div>
    )
}

export default CreateExercise;