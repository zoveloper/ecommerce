import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer,
    productDetailsReducer
} from './reducers/productReducers'
import {workListReducer
        ,workDetailsReducer
} from './reducers/workReducers'

import {cartReducer
} from './reducers/cartReducers'

import { orderCreateReducer, 
        orderDetailsReducer,
        orderPayReducer,
        orderDeliverReducer,
        orderListMyReducer,
        orderListReducer,
} from './reducers/orderReducers'

const reducer = combineReducers({
    productList : productListReducer,
    productDetails:productDetailsReducer,

    workList:workListReducer,
    workDetails:workDetailsReducer,
    
    cart:cartReducer,

    orderCreate:orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay : orderPayReducer,
    orderListMy: orderListMyReducer,
    orderList:orderListReducer,
    orderDeliver : orderDeliverReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

    const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
    JSON.parse(localStorage.getItem('shippingAddress')) : {}
const initialState = {
    cart:{
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
    }
        
}

const middleware = [thunk]

const store = createStore(reducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store