import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap'
import Loader from '../components/Loader'
//import styled from "styled-components";

import { listProductDetails } from '../actions/productActions'


function ProductScreen({ match,history }) {
    const [qty, setQty] = useState(1)

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const {loading, error, product } = productDetails

    useEffect(() => {

            dispatch(listProductDetails(match.params.id))
    }, [dispatch, match])

    const addToCartHandler =() =>{
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }
    

    return (
        <div>
            <Link to='/shop' className='btn btn-light my-3'>Go Back</Link>
            {loading ? <Loader/>
                : error ? <h3>{error}</h3>
                    :(
                        <div>
                            <Row>
                                <Col md={6}>
                                        <Image src={product.image} alt={product.name} fluid/>
                                </Col>

                                <Col md={3}>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <h3>{product.name}</h3>
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            Price: ${product.price}
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            Description: ${product.description}
                                        </ListGroup.Item>
                                    </ListGroup>
   
                                <Card>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>price:</Col>
                                                <Col>
                                                    <strong>${product.price}</strong>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>


                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Status</Col>
                                                <Col>
                                                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>

                                        {product.countInStock > 0 && (
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Qty</Col>
                                                    <Col xs='auto' className='my-1'>
                                                        <Form.Control 
                                                            as="select"
                                                            value={qty}
                                                            onChange={(e) => setQty(e.target.value)}
                                                        >
                                                            {
                                                                
                                                                [...Array(product.countInStock).keys()].map((x) =>(
                                                                    <option key = {x+1} value = {x+1}>
                                                                        {x+1}
                                                                    </option>

                                                                ))
                                                            }


                                                        </Form.Control>
                                                    </Col>
                                                </Row>


                                            </ListGroup.Item>

                                            
                                        )}

                                        <ListGroup.Item>
                                            <Button
                                            onClick={addToCartHandler}
                                            className='btn-block' 
                                            disabled={product.countInStock === 0}
                                            type='button'> 
                                            ADD TO CART1
                                            </Button>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card>

                            </Col>
                            
                        </Row>
                                                    
                    </div>
                )
            
        
        }
            
            
        </div>
    )
}
export default ProductScreen

/*const ProudctDetail = styled.div`
    display: flex;
    height: 100vh;
`
const Thumbnail = styled.img`
object-fit: cover;
width: 100px;
height: 100px;
`*/