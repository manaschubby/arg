import React, { useRef, useState } from 'react';
import SVG from './svg';
const Index = () => {
    const passwords = ["Laude", "Chomu", "Gaandu", "chutiye"];
    const passwordRef = useRef();
    const [level, setLevel] = useState(0);
    const submit = (e)=>{
        e.preventDefault();
        if(passwordRef.current.value==passwords[level]){
            if(level==3){
                alert("Congratulations: You are a certified Abuser");
                setLevel(0);
                return;
            }
            setLevel(level+1);
            passwordRef.current.value="";
        }
    }
    return (
        <div className='background'>
            <SVG />
            <div className='center-main'>
                <div className='level'>Level: {level}</div>
                <div className='label'>Enter Password</div>
                <input className='password' type="password" placeholder='Password' ref={passwordRef}></input>
                <button className='submit' onClick={submit}>Advance</button>
            </div>
        </div>
    );
}

export default Index;
