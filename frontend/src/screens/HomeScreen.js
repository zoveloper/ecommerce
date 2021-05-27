import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'

import Product from '../components/Product'
import Loader from '../components/Loader'
import {listProducts} from '../actions/productActions'

import Grid from '@material-ui/core/Grid';


function HomeScreen({map}) {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const {error,loading, products} = productList
    

    useEffect(() => {
        dispatch(listProducts())

    }, [dispatch])
    return (
        <div>
            <h1>Latest Products</h1>
            {loading ? <Loader/>
                : error ? <h3>{error}</h3>
                    :
                
                <Grid container justify="flex-start" spacing={2}>
                {products.map(product =>(
                    <Grid item key={product._id} xs={12} sm={6} md= {4} lg={3}>
                        <Product product={product}/> 
                    </Grid>

                ))}
            </Grid>
            
        }
        </div>

    )
};


export default HomeScreen


