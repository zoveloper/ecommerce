import React,{useState,useEffect} from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom'
import axios from 'axios'

function ProductScreen({match}) {
    const[product,setProduct] = useState([])
        
    useEffect(() => {
        
        async function fetchProduct(){

            const{data}= await axios.get(`/api/products/${match.params.id}`)
            setProduct(data)
        }
        fetchProduct()

    })
    return (
        <ProudctDetail>
            {product.name}
            <Link to = {`/product/${product._id}`}>
                <Thumbnail src={product.image} />
            </Link>
        </ProudctDetail>
    )
}

export default ProductScreen

const ProudctDetail = styled.div`
    display: flex;
    height: 100vh;
`
const Thumbnail = styled.img`
object-fit: cover;
width: 100px;
height: 100px;
`