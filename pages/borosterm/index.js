import React, {useEffect, useState} from 'react';
import Papa from 'papaparse'
import SVG from '../boros/svg';
const Index = () => {
    
    const [link, setLink] = useState("")
    useEffect(() => {
        var b = Buffer.from("aHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvZS8yUEFDWC0xdlJTSXp2U2ZsZDVONHA5aE5udTl3RkRRZnBIcUphbGx1YnlPV0RZV3praU84Z1k1eFRCcmVfc25Ib290MndFSUFYWDRqY2Y2R2FpUHN4bC9wdWI/Z2lkPTAmc2luZ2xlPXRydWUmb3V0cHV0PWNzdg==", 'base64')
        var s = b.toString();
        Papa.parse(s,
            {
                download: true,
                hearder:true,
                complete: (res) => {
                    setLink(res.data[6][1]);
                }
            })
    }, []);
    return (
        <div className='background borous'><SVG />
            <div className='center-main borous-term'><h1 style={{color:"white"}}>Boros is terminated</h1><div className='label'><a href={link}>{link}</a></div></div>
        </div>
    );
}

export default Index;
