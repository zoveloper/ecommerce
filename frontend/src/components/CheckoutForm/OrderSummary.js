import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Row, Col, ListGroup,Image, Card } from 'react-bootstrap'
import {  Divider,ListItemText,List, ListItem,InputLabel, Select, MenuItem, Button, Grid, Typography,ButtonBase } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { createOrder } from '../../actions/orderActions'
import Message from '../../components/Message'
import { makeStyles } from '@material-ui/core/styles';

const OrderSummary = () => {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const orderCreate = useSelector(state => state.orderCreate)
    const {order, error, success} = orderCreate

    cart.itemsPrice =  cart.cartItems.reduce((acc, item) => acc +item.price * item.qty, 0).toFixed(2)
    cart.shippingPrice = (cart.itemsPrice > 50 ? 0 : 5).toFixed(2)
    cart.taxPrice = Number((0.13) * cart.itemsPrice).toFixed(2)
    cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)).toFixed(2)
    
    const placeOrder = () => {
        dispatch(createOrder({
            orderItems:cart.cartItems,
            shippingAddress:cart.shippingAddress,
            paymentMethod:cart.paymentMethod,
            itemsPrice:cart.itemsPrice,
            shippingPrice:cart.shippingPrice,
            taxPrice:cart.taxPrice,
            totalPrice:cart.totalPrice,
        }))

    }

    const classes = useStyles();
    return (
        <div>
                    <List variant='flush'>
                        <ListItem>
                        <ListItemText primary="Shipping Address" secondary={` ,${cart.shippingAddress.address},${cart.shippingAddress.city},${cart.shippingAddress.country},${cart.shippingAddress.postalCode}`} />
                        </ListItem>
                        <ListItem>
                        <ListItemText primary="Shipping Method" secondary={`Shipping Method: ${cart.paymentMethod}`} />
                        </ListItem>
                        <Divider />
                        <Typography>Order Items</Typography>
                        
                            {cart.cartItems.length === 0 ? <Message>
                                Your cart is empty
                            </Message> : (
                                <List>
                                    {cart.cartItems.map((item,index) => (
                                    <Grid container spacing={5}>
                                        <Grid item xs={2} >
                                            <ButtonBase className={classes.image}>
                                                <img src={item.image} className={classes.image} alt={item.name} fluid rounded/>
                                            </ButtonBase>
                                        </Grid>
                                        
                                        <Grid item xs={6}>
                                        <Link to={`/product/${item.product}`}>
                                        {item.name}
                                        <br/>
                                        {`quantity:${item.qty}`}   
                                        </Link>
                                        </Grid>
                                        
                                        <Grid item  xs={4}>
                                            ${(item.qty * item.price).toFixed(2)}
                                        </Grid>  
                                    </Grid>    
                                    ))}
                                    
                                </List>
                            )}
                    </List>
                    <Divider /><br/>
             <Col md={4}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Order Summary</h2>
                            </ListGroup.Item>
                             
                        </ListGroup>

                        <ListGroup.Item>
                             <Row>
                                 <Col>Item:</Col>
                                 <Col>$ {cart.itemsPrice}</Col>
                             </Row>
                        </ListGroup.Item>
                        
                        <ListGroup.Item>
                             <Row>
                                 <Col>Shpping:</Col>
                                 <Col>$ {cart.shippingPrice}</Col>
                             </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                             <Row>
                                 <Col>Tax:</Col>
                                 <Col>$ {cart.taxPrice}</Col>
                             </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                             <Row>
                                 <Col>Total:</Col>
                                 <Col>$ {cart.totalPrice}</Col>
                             </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            {error &&<Message variant='danger'>{error}</Message>}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Button
                                type='button'
                                className='btn-block'
                                disabled={cart.cartItems === 0}
                                onClick={placeOrder}
                            >
                                Place Order
                            </Button>
                        </ListGroup.Item>

                    </Card>
                </Col>
        </div>
    )
}

export default OrderSummary

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 78,
      height: 78,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));