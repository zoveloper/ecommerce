import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer,
    productDetailsReducer
} from './reducers/productReducers'
import {workListReducer
        ,workDetailsReducer
} from './reducers/workReducers'

const reducer = combineReducers({
    productList : productListReducer,
    productDetails:productDetailsReducer,

    workList:workListReducer,
    workDetails:workDetailsReducer,
    
})


const initialState = {}

const middleware = [thunk]

const store = createStore(reducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store