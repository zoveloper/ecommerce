import React,{useState,useEffect} from 'react'
import { Row,Col } from 'react-bootstrap'
import Product from '../components/Product'
import '../Global.scss'

import axios from 'axios'

function HomeScreen() {
    const[products,setProducts] = useState([])
        
    useEffect(() => {
        
        async function fetchProducts(){
            const{data}= await axios.get('/api/products/')
            setProducts(data)
        }
        fetchProducts()

    }, [])
    return (
        <div>
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

