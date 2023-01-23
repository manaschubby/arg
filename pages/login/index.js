import React, { useRef, useState, useEffect } from 'react';
import SVG from './svg';
import Papa from 'papaparse'
const Index = () => {
    const [passwords,setPasswords] = useState(["Laude", "Chomu", "Gaandu", "chutiye"]);
    const [data,setData]=useState([])
    const passwordRef = useRef();
    const [level, setLevel] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    let timeout;
    const fetch =()=>{
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vQk1zlmIKcmbHEUfScquMDoTqpzYcan__KpkXx64cJuCUovsbp4Cftl2qAn79GybuaBHrrXLkERoDDU/pub?gid=0&single=true&output=csv",{
        download: true,
        hearder:true,
        complete:(results)=>{
            setData(results.data);
            setIsLoading(false);
        }
    })
        setData(Array.from(data))
    }
    useEffect(() => {
        fetch();
    },[]);
    const submit = (e)=>{
        if(passwordRef.current.value==data[level][1]){
            alert(data[level][2]);
            setLevel(level+1);
            setIsLoading(true);
            timeout=setTimeout(()=>{
                setIsLoading(false);
            },2000)
            if(data[level][1]==null){
                alert("Thank u for playing");
                setLevel(1);
            }
            passwordRef.current.value="";
        }
        else{
            alert("Incorrect Answer try Again");
        }
    }
    return (
        <div className='background'>
            <SVG />
            {!isLoading ? <div className='center-main'>
                <h1 className='level'>Level: {level}</h1>
                <div className='label'>Enter Password</div>
                <input className='password' type="password" placeholder='Password' ref={passwordRef}></input>
                <button className='submit' onClick={submit}>Advance</button>
            </div>
            : <div className='center-main'><h1 style={{color:"white"}}>Checking Database for answers</h1></div>}
        </div>
    );
}

export default Index;
