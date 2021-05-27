import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'

import Work from '../components/Work'
import Loader from '../components/Loader'
import {listWorks} from '../actions/workActions'
import Grid from '@material-ui/core/Grid';


function WorkScreen() {
    const dispatch = useDispatch()
    const workList = useSelector(state => state.workList)
    const {error,loading, works} = workList

    useEffect(() => {
        dispatch(listWorks())

    }, [dispatch])
    
    return (
        <div>
            <h1>Latest Works</h1>

            {loading ? <Loader/>
                : error ? <h3>{error}</h3>
                    :
                <Grid container justify="flex-start" spacing={1}>
                {works.map(work =>(
                    <Grid item key={work._id} xs={12} sm={6} md= {4} lg={3}>
                        <Work work={work}/> 
                    </Grid>

                ))}
            </Grid>
            
        }
        </div>

    )
};


export default WorkScreen


