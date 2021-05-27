import axios from 'axios'
import { 
    WORK_LIST_REQUEST,
    WORK_LIST_SUCCESS,
    WORK_LIST_FAIL,


 } from  '../constants/workConstants'


 export const listWorks = () => async (dispatch) => {
    try{
        dispatch({ type: WORK_LIST_REQUEST})

        const { data } = await axios.get(`/api/works/`)

        dispatch({
            type: WORK_LIST_SUCCESS,
            payload: data
        })



    } catch (error) {
        dispatch({
            type: WORK_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
     }


 }

