import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup} from 'react-bootstrap'
import Loader from '../components/Loader'
//import styled from "styled-components";

import { listWorkDetails } from '../actions/workActions'


function ProductScreen({ match }) {
    const dispatch = useDispatch()

    const workDetails = useSelector(state => state.workDetails)
    const {loading, error, work } = workDetails


    useEffect(() => {

            dispatch(listWorkDetails(match.params.id))



    }, [dispatch, match])
    

    return (
        <div>
            <Link to='/shop' className='btn btn-light my-3'>Go Back</Link>
            {loading ? <Loader/>
                : error ? <h3>{error}</h3>
                    :(
                        <div>
                            <Row>
                                <Col md={6}>
                                        <Image src={work.image} alt={work.name} fluid/>
                                </Col>

                                <Col md={3}>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <h3>{work.name}</h3>
                                        </ListGroup.Item>


                                        <ListGroup.Item>
                                            Description: ${work.description}
                                        </ListGroup.Item>
                                    </ListGroup>
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