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
    const router = useRouter();
    let timeout;
    const fetch =()=>{const buffer = Buffer.from("aHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvZS8yUEFDWC0xdlFrMXpsbUlLY21iSEVVZlNjcXVNRG9UcXB6WWNhbl9fS3BrWHg2NGNKdUNVb3ZzYnA0Q2Z0bDJxQW43OUd5YnVhQkhyclhMa0VSb0REVS9wdWI/Z2lkPTAmc2luZ2xlPXRydWUmb3V0cHV0PWNzdg==", 'base64');const s = buffer.toString();Papa.parse(s,{download: true,hearder:true,complete:(results)=>{setData(results.data);setIsLoading(false);}});setData(Array.from(data))};useEffect(() => {fetch();},[]);
    const submit = (e)=>{if(passwordRef.current.value==data[level][1]){alert(data[level][2]);if (data[level+1]){setLevel(level+1)}else{router.push('/ourosterm');setLevel(1);return;}setIsLoading(true);timeout=setTimeout(()=>{setIsLoading(false);},2000);passwordRef.current.value="";}
        else{alert(data[level][4]);}};return (<div className='background'><div className='love'>Designed with love: <a href='https://www.linkedin.com/in/manas-ashwin-053755224/'>Manas Ashwin</a></div><SVG />{!isLoading ? <div className='center-main'><h1 className='level'>Code {level} for termination of OUROS</h1><div className='label'>{data[level][3]}</div><input className='password' type="password" placeholder='Password' ref={passwordRef}></input><button className='submit' onClick={submit}>Advance</button> </div>
            : <div className='center-main'><h1 style={{color:"white"}}>Checking Database for answers</h1></div>}
        </div>
    );
}

export default Index;
