import { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';
import Papa from 'papaparse'
import {useRouter} from 'next/router';
const useSuccess = () => {
    const router = useRouter()
    const [successKey, setSuccessKey] = useState();
    const [thankyoupara, setThankYoupara] = useState("")
    useEffect(() => {
        initializeSuccess()
    });
    const initializeSuccess = () => {
        if (typeof window !== 'undefined') {
        if(!(localStorage.getItem("Submitted"))){
            const encryptedSuccessKey = localStorage.getItem("successfull")
            if(!encryptedSuccessKey){
                router.push('/lab');
                return;
            }
            const buffer = Buffer.from("aHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvZS8yUEFDWC0xdlRzVWZvUzZkTzM5S1ZxWEVhLVZPTkZkOFllTWxVbldqbzVlM0Y5R29CaEdfRjhfQ2xoZWNNakYxckQyX3R1a0o2MURSZDV3akNFTk1mWS9wdWI/Z2lkPTAmc2luZ2xlPXRydWUmb3V0cHV0PWNzdg==", 'base64');const b = buffer.toString();
            Papa.parse(b,
                {
                    download: true,
                    hearder:true,
                    complete: (res) => {
                        
                        
                        const secretPassKey = res.data[7][1];

                        const decryptedSuccessKey = CryptoJS.AES.decrypt(encryptedSuccessKey,secretPassKey).toString();
                        setSuccessKey(decryptedSuccessKey);
                        setThankYoupara(decryptedSuccessKey=="36" ? res.data[22][1]: res.data[23][1]);
                    }   
                });
        }
        else{
            router.push('/')
        }}
    }
    return [successKey, initializeSuccess, thankyoupara]
}

export default useSuccess;
