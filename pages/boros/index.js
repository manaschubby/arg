import React, { useRef, useState, useEffect } from 'react';
import SVG from './svg';
import Papa from 'papaparse'
import { useRouter } from 'next/router';
const Index = () => {
    const [passwords,setPasswords] = useState(["Laude", "Chomu", "Gaandu", "chutiye"]);
    const [data,setData]=useState([])
    const passwordRef = useRef();
    const [level, setLevel] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    let timeout;
    const router = useRouter()
    const fetch =()=>{var b = Buffer.from("aHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvZS8yUEFDWC0xdlJTSXp2U2ZsZDVONHA5aE5udTl3RkRRZnBIcUphbGx1YnlPV0RZV3praU84Z1k1eFRCcmVfc25Ib290MndFSUFYWDRqY2Y2R2FpUHN4bC9wdWI/Z2lkPTAmc2luZ2xlPXRydWUmb3V0cHV0PWNzdg==", 'base64');var s = b.toString();Papa.parse(s,{download: true,hearder:true,complete:(results)=>{setData(results.data);setIsLoading(false);}});setData(Array.from(data))};useEffect(() => {fetch();},[]);const submit = (e)=>{if(passwordRef.current.value==data[level][1]){alert(data[level][2]);if (data[level+1]!=""){setLevel(level+1)}else{router.push('/borosterm');setLevel(1);return;}setIsLoading(true);timeout=setTimeout(()=>{setIsLoading(false);},2000);passwordRef.current.value="";}
        else{alert(data[level][4]);}};return (<div className='background borous'><SVG />{!isLoading ? <div className='center-main'><h1 className='level'>Code {level} for termination of BOROS</h1><div className='label'>{data[level][3]}</div><input className='password' type="password" placeholder='Password' ref={passwordRef}></input><button className='submit' onClick={submit}>Advance</button> </div>
            : <div className='center-main'><h1 style={{color:"white"}}>Checking Database for answers</h1></div>}
        </div>
    );
}

export default Index;
