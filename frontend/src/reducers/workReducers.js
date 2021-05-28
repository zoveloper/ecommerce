import { 
    WORK_LIST_REQUEST,
    WORK_LIST_SUCCESS,
    WORK_LIST_FAIL,

    WORK_DETAILS_REQUEST,
    WORK_DETAILS_SUCCESS,
    WORK_DETAILS_FAIL,
    
 } from  '../constants/workConstants'

export const workListReducer = (state = {works:[]}, action) =>{
    console.log(action.type)

    switch (action.type){
        case WORK_LIST_REQUEST:
            return {loading: true, works:[]}
        

        case WORK_LIST_SUCCESS:
            return {loading: false, 
                works: action.payload}


        case WORK_LIST_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }     
    
    

}

export const workDetailsReducer = (state = {work:[]}, action) =>{
    console.log({product:{reviews:[]}})
    switch (action.type){
        case WORK_DETAILS_REQUEST:
            return {loading: true, ...state}
        

        case WORK_DETAILS_SUCCESS:
            return {loading: false, work: action.payload}

        case WORK_DETAILS_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }     
    

}