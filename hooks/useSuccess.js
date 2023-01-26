import { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';
import Papa from 'papaparse'
import {useRouter} from 'next/router';
const useSuccess = () => {
    const router = useRouter()
    const [successKey, setSuccessKey] = useState();
    const [thankyouText, setThankYoutext] = useState("");
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
            Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTsUfoS6dO39KVqXEa-VONFd8YeMlUnWjo5e3F9GoBhG_F8_ClhecMjF1rD2_tukJ61DRd5wjCENMfY/pub?gid=0&single=true&output=csv",
                {
                    download: true,
                    hearder:true,
                    complete: (res) => {
                        setThankYoupara(res.data[22][1]);
                        setThankYoutext(res.data[23][1]);
                        const secretPassKey = res.data[7][1];

                        const decryptedSuccessKey = CryptoJS.AES.decrypt(encryptedSuccessKey,secretPassKey).toString();
                        setSuccessKey(decryptedSuccessKey);
                    }   
                });
        }
        else{
            router.push('/')
        }}
    }
    return [successKey, initializeSuccess, thankyoupara, thankyouText]
}

export default useSuccess;
