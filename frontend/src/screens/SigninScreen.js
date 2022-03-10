import React from 'react';
import { Helmet } from 'react-helmet-async';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useLocation } from 'react-router-dom';

function SigninScreen() {
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get("redirect");
    const redirect = redirectInUrl ? redirectInUrl : "/";
    return (
        <Container className="small-container">
            <Helmet>
                <title>Sign In</title>
            </Helmet>
            <h2 className='my-3'>Sign In</h2>
            <Form>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" required />
                </Form.Group>
                <div className='mb-3'>
                    <Button type="submit">Sign In</Button>
                </div>
                <div className='mb-3'>
                    Don't have an account yet?{" "}
                    <Link to={`/signup?redirect=${redirect}`}>Create an account.</Link>
                </div>
            </Form>
        </Container>
    )
}

export default SigninScreen;