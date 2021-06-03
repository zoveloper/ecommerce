import React, {useState, useEffect} from 'react'
import {  Form,Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutSteps from '../../../components/CheckoutSteps'
import { createOrder } from '../../../actions/orderActions'
import { saveShippingAddress,savePaymentMethod } from '../../../actions/cartActions'

import { ORDER_CREATE_RESET } from '../../../constants/orderConstants'

import Message from '../../../components/Message'

const Checkout = ({history}) => {
  const orderCreate = useSelector(state => state.orderCreate)
    const {order, error, success} = orderCreate

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)

    cart.itemsPrice =  cart.cartItems.reduce((acc, item) => acc +item.price * item.qty, 0).toFixed(2)
    cart.shippingPrice = (cart.itemsPrice > 50 ? 0 : 5).toFixed(2)
    cart.taxPrice = Number((0.13) * cart.itemsPrice).toFixed(2)
    cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)).toFixed(2)


    useEffect(() =>{
        if(success){
            history.push(`/order/${order._id}`)
            dispatch({type: ORDER_CREATE_RESET})
        }
    }, [success, history])

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
    const {shippingAddress} = cart

    
    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({address, city, postalCode, country}))
   
    }

    const [paymentMethod, setPaymentMethod] = useState('credit')
    
    const submitHandler1 = (f) =>{
      f.preventDefault()
      dispatch(savePaymentMethod(paymentMethod))


  }
    
  


    return (
        <div>
          <CheckoutSteps step1 step2 step3 />
          <Form onSubmit={submitHandler}>
          <Form.Group controlId='address'>
              <Form.Label>Address</Form.Label>
              <Form.Control
                  required
                  type='text'
                  placeholder='Enter address'
                  value={address ? address : ''}
                  onChange={(e) => setAddress(e.target.value)}
              >
              </Form.Control>
          </Form.Group>

          <Form.Group controlId='city'>
              <Form.Label>City</Form.Label>
              <Form.Control
                  required
                  type='text'
                  placeholder='Enter city'
                  value={city ? city : ''}
                  onChange={(e) => setCity(e.target.value)}
              >
              </Form.Control>
          </Form.Group>

          <Form.Group controlId='postalCode'>
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
                  required
                  type='text'
                  placeholder='Enter postal code'
                  value={postalCode ? postalCode : ''}
                  onChange={(e) => setPostalCode(e.target.value)}
              >
              </Form.Control>
          </Form.Group>

          <Form.Group controlId='country'>
              <Form.Label>Country</Form.Label>
              <Form.Control
                  required
                  type='text'
                  placeholder='Enter country'
                  value={country ? country : ''}
                  onChange={(e) => setCountry(e.target.value)}
              >
              </Form.Control>
          </Form.Group>
          <Button type='submit' variant='primary'>
              Continue
          </Button>


          </Form>
          ////
          <Form onSubmit={submitHandler1}>
          <Form.Group>
                    <Form.Label as='legend'>Select Method</Form.Label>
                    <Col>
                        <Form.Check
                            type='radio'
                            label='PayPal'
                            id='paypal'
                            name = 'pay'
                            
                            onChange={() => setPaymentMethod('paypal')}
                        >
                          </Form.Check>
                          <Form.Check
                            type='radio'
                            label='Credit Card'
                            id='creditcard'
                            name = 'credit'
                            
                            onChange={() => setPaymentMethod('Credit Card')}
                        ></Form.Check>
                                        <Button type='submit' variant='primary'>
                    Continue
                </Button>

                        
                    </Col>
                </Form.Group>
                </Form>
          ////
            
            <Row>
                <Col md={8}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Shipping</h2>
                            <p>
                                <strong>Shipping: </strong>
                                {cart.shippingAddress.address}, {cart.shippingAddress.city}
                                {'  '}
                                {cart.shippingAddress.postalCode},
                                {'  '}
                                {cart.shippingAddress.country},
                            </p>

                        </ListGroup.Item>
                        
                        <ListGroup.Item>
                            <h2>Payment Method</h2>

                            <p>
                                <strong>Method: </strong>
                                {cart.paymentMethod}

                            </p>

                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Order Items</h2>
                            {cart.cartItems.length === 0 ? <Message>
                                Your cart is empty
                            </Message> : (
                                <ListGroup variant='flush'>
                                    {cart.cartItems.map((item,index) => (
                                        <ListGroup.Item key={index}>
                                            <Row>
                                                <Col md={1}>
                                                    <Image src={item.image} alt={item.name} fluid rounded/>
                                                </Col>

                                                <Col>
                                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                                </Col>

                                                <Col md={4}>
                                                    {item.qty} X ${item.price} = ${(item.qty * item.price).toFixed(2)}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            )}

                        </ListGroup.Item>

                    </ListGroup>
                </Col>

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
            </Row>
        </div>
    )
}

export default Checkout
