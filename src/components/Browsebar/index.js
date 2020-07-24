import React from 'react';
import Form from 'react-bootstrap/Form';
import Loading from '../Loading';
import useAxios from 'axios-hooks';
import Alert from 'react-bootstrap/Alert';

const Browsebar = (props) => {
    const { search } = props;

    const APICall = ` https://dog.ceo/api/breeds/list/all`;

    const [{ data, loading, error }] = useAxios(APICall);

    if (search === '') return '';
    if (loading) return <Loading />;
    if (error) return <Alert variant="danger">Cannot fetch that breed</Alert>;



    return (
        <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Breed</Form.Label>
                <Form.Control as="select" onChange={props.changeBreed}>
                    {Object.keys(data.message).map((breed, ind) => (
                        <option key={ind}>{breed}</option>
                    ))}
                </Form.Control>
            </Form.Group>
        </Form>
    );
};

export default Browsebar;
