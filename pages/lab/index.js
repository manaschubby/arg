import React, { useRef, useEffect, use, useState } from 'react';
import { useRouter } from 'next/router'
import CryptoJS from 'crypto-js';
import useLab from '../../hooks/useLab';
const Index = () => {
    const passwordRef = useRef();
    const [reqPassword, nextLevel, initialized, prompt] = useLab(1);
    const submit =()=>{
        if (passwordRef.current.value==reqPassword){
            nextLevel("");
            return;
        }else{
            alert("No Babe wrong code entered. Try again love");
        }
    }
    return (
    <div className='bg'>
        <div id="container">
            <div className="steam" id="steam1"> </div>
            <div className="steam" id="steam2"> </div>
            <div className="steam" id="steam3"> </div>
            <div className="steam" id="steam4"> </div>
        </div>
        {initialized?<div className='center-main main-lab'>
            <h1 className='lab-label'>
                 {prompt}
            </h1>
            <input className='lab password' type="password" placeholder='Password' ref={passwordRef}/>
            <button className='submit lab' onClick={submit}>TERMINATE</button>
        </div>:
        <><h1 className='lab-label'>
        Loading Lab settings and directory
   </h1></>}
    </div>
    );
}

export default Index;
