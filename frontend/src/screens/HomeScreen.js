import React from 'react'
import { Row,Col } from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'
import '../Global.scss'

function HomeScreen() {
    return (
        <div>
            
            <h1>Latest Products</h1>
                <div className="proucts">
                <Row>
                {products.map(product =>(
                    <Col key={product._id} sm={6} md={5} lg= {4} xl={3}>
                        <Product product={product}/>
                    </Col>

                ))}
            </Row>
            </div>
        
        </div>
    )
};


export default HomeScreen
