import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Store } from '../Store';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import MessageBox from '../components/MessageBox';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function CartScreen() {
    const navigate = useNavigate();
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
        cart: { cartItems }
    } = state;

    const updateCartHandler = async (item, quantity) => {
        const { data } = await axios.get(`/api/products/${item._id}`);
        if (data.countInStock < quantity) {
            toast.error("Sorry, this item is currently out of stock!");
            // window.alert("Sorry, this item is currently out of stock!!!");
            return;
        }
        ctxDispatch({ type: "CART_ADD_ITEM", payload: { ...item, quantity } });
    }

    const removeItemHandler = (item) => {
        ctxDispatch({ type: "CART_REMOVE_ITEM", payload: item });
    }

    const checkoutHandler = () => {
        navigate("/signin?redirect=/shipping");
    }

    return (
        <div>
            <Helmet>
                <title>Shopping Cart</title>
            </Helmet>
            <h1>Shopping Cart</h1>
            <Row>
                <Col md={8}>
                    {cartItems.length === 0 ? (
                        <MessageBox>
                            Cart is empty. <Link to="/">Go Shopping</Link>
                        </MessageBox>
                    ) : (
                        <ListGroup>
                            {cartItems.map((item) => (
                                <ListGroup.Item key={item._id}>
                                    <Row className='align-items-center'>
                                        <Col md={4}>
                                            <img
                                                src={item.image} alt={item.name} className="img-fluid rounded img-thumbnail"></img>{" "}
                                            <Link to={`/product/${item.slug}`}>{item.name}</Link>
                                        </Col>
                                        <Col md={3}>
                                            <Button onClick={() => updateCartHandler(item, item.quantity - 1)} variant="light" disabled={item.quantity === 1}>
                                                <i className='fas fa-minus-circle'></i>
                                            </Button>{" "}
                                            <span>{item.quantity}</span>{" "}
                                            <Button onClick={() => updateCartHandler(item, item.quantity + 1)} variant="light" disabled={item.quantity === item.countInStock}>
                                                <i className='fas fa-plus-circle'></i>
                                            </Button>
                                        </Col>
                                        <Col md={3}><strong>$</strong><strong>{item.price}</strong></Col>
                                        <Col md={2}>
                                            <Button onClick={() => removeItemHandler(item)} variant='light'>
                                                <i className='fas fa-trash'></i>
                                            </Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <h3>
                                        Subtotal: {cartItems.reduce((a, c) => a + c.quantity, 0)}{" "}
                                        item(s) $
                                        {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                                    </h3>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className='d-grid'>
                                        <Button onClick={checkoutHandler} type='button' variant='primary' disabled={cartItems.length === 0}>Proceed to Checkout</Button>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default CartScreen;