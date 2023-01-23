import React, { useRef, useState, useEffect } from 'react';
import SVG from './svg';
const Index = () => {
    const passwords = ["Laude", "Chomu", "Gaandu", "chutiye"];
    const passwordRef = useRef();
    const [level, setLevel] = useState(0);
    useEffect(() => {
        const listener = event => {
          if (event.code === "Enter" || event.code === "NumpadEnter") {
            event.preventDefault();
            submit(event)
          }
        };
        document.addEventListener("keydown", listener);
        return () => {
          document.removeEventListener("keydown", listener);
        };
      }, [level]);
    const submit = (e)=>{
        e.preventDefault();
        if(passwordRef.current.value==passwords[level]){
            if(level==3){
                alert("Congratulations: You are a certified Abuser");
                window.location.reload(false);

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
