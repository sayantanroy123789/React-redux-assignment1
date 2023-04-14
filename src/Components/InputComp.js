import React from 'react';
import { useState } from 'react';
import myStore from '../Redux/Store';
function InputComp(){
    const [state,setState]=useState("")
    const callDispatch=()=>{
        myStore.dispatch({
            type:"name",
            username:state,
        });
    };
    return(
        <div style={{marginTop:"100px", textAlign:"center"}} >
            <h2>Input component</h2>
            <input type="text"  onChange={(e)=>{setState(e.target.value)}} />
            <button onClick={callDispatch}>submit</button>
        </div>
    );
}
export default InputComp;