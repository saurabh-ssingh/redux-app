import React from 'react';
import {incNumber,decNumber}  from '../redux/actions';

import { useSelector,useDispatch } from 'react-redux';


const Toggler = () => {
    const mystate = useSelector((state)=>state.changeNumber);
    const dispatch = useDispatch();
    return(
        <div className='main-div'>
            <h1>INCREMENT/DECREMENT operator</h1>
            <button onClick={()=>dispatch(incNumber())}>INCREMENT</button>
            <h1>{mystate}</h1>
            <button onClick={()=>dispatch(decNumber())}>DECREMENT</button>
        </div>
    )
};

export default Toggler;
