import React, { useEffect } from "react";

//REDUX 
import { useDispatch, useSelector } from "react-redux";
import heroActions from '../actions/heroActions'

const Home = () => {
const dispatch = useDispatch()
useEffect(() => {
    dispatch(heroActions())
}, [dispatch])

const {api} = useSelector((state) => state.heros)
console.log(api)
    return(
        <div></div>
    )
}

export default Home