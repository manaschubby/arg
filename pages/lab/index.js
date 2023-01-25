import React, { useRef, useEffect, use } from 'react';
import { useRouter } from 'next/router'
import CryptoJS from 'crypto-js';
import Papa from 'papaparse'
import useLab from './useLab';
const Index = () => {
    const passwordRef = useRef();
    const [reqPassword, nextLevel] = useLab(1);
    const submit =()=>{
        if (passwordRef.current.value==reqPassword){
            nextLevel();
            return;
        }else{
            alert("No Babe wrong code entered. Try again love");
        }
    }
    return (
    <div>
        <div id="container">
            <div className="steam" id="steam1"> </div>
            <div className="steam" id="steam2"> </div>
            <div className="steam" id="steam3"> </div>
            <div className="steam" id="steam4"> </div>
        </div>
        <div className='main-lab'>
            <h1 className='lab-label'>
                Enter code for lab destruction
            </h1>
            <input className='lab password' type="password" placeholder='Password' ref={passwordRef}/>
            <button className='submit lab' onClick={submit}>Advance</button>
        </div>
    </div>
    );
}

export default Index;
