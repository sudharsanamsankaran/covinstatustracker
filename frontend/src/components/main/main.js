import React from "react"
// import "./homepage.css"
import { useState, useEffect } from "react"
import Awareness from '../awss/awareness'
import { useHistory } from "react-router-dom"
import Firstpage from "./firstpage"


const MainPage = ({updateUser}) => {
    const [loading,setLoading] = useState(false)
    const history = useHistory()
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },4000)
    },[])
    return (
        <>
            { loading?
            <Awareness></Awareness>
            :
            <div>
            <Firstpage></Firstpage>
            {/* <div className="button" onClick={() => updateUser({})} >Logout</div> */}
            </div>
            

    }
        </>
    )
}

export default MainPage