import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { useNavigate } from 'react-router-dom';

function SearchBox() {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        navigate(query ? `/search/?query=${query}` : "/search");
    };

    return (
        <Form className='d-flex me-auto' onSubmit={submitHandler}>
            <InputGroup>
                <Form.Control type='text' name='q' id='q' onChange={(e) => setQuery(e.target.value)} placeholder="Search Products..." aria-label='Search Products' aria-describedby='button-search'></Form.Control>
                <Button variant='outline-primary' type='submit' id='button-search'>
                    <i className='fas fa-search'></i>
                </Button>
            </InputGroup>
        </Form>
    )
}

export default SearchBox;