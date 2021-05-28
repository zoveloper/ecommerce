import axios from 'axios'
import { 
    WORK_LIST_REQUEST,
    WORK_LIST_SUCCESS,
    WORK_LIST_FAIL,

    WORK_DETAILS_REQUEST,
    WORK_DETAILS_SUCCESS,
    WORK_DETAILS_FAIL,


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


 export const listWorkDetails = (id) => async (dispatch) => {
    try{
        dispatch({ type: WORK_DETAILS_REQUEST})

        const { data } = await axios.get(`/api/works/${id}`)

        dispatch({
            type: WORK_DETAILS_SUCCESS,
            payload: data
        })



    } catch (error) {
        dispatch({
            type: WORK_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
     }


 }