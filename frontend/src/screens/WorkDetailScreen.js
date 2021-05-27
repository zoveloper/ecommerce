import React,{useState,useEffect} from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom'
import axios from 'axios'

function WorkDetailScreen({match}) {
    const[work,setWork] = useState([])
        
    useEffect(() => {
        
        async function fetchWork(){

            const{data}= await axios.get(`/api/works/${match.params.id}`)
            setWork(data)
        }
        fetchWork()
    })
    return (
        <ProudctDetail>
            {work.name}
            <Link to = {`/work/${work._id}`}>
                <Thumbnail src={work.image} />
            </Link>
        </ProudctDetail>
    )
}

export default WorkDetailScreen

const ProudctDetail = styled.div`
    display: flex;
    height: 100vh;
`
const Thumbnail = styled.img`
object-fit: cover;
width: 100px;
height: 100px;
`