import React, { useEffect, useState } from 'react';
import CryptoJS from 'crypto-js';
import Papa from 'papaparse'
import {useRouter} from 'next/router';
const useLab = (curr) => {
    const router = useRouter()
    var secretPassKey;
    var keys = ["Why do you want to acces this you son of a bitch. Play the fucking game"];
    const [answer, setAnswer] = useState();
    const [initialized, setInitialized] = useState(false);
    useEffect(()=>{
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTsUfoS6dO39KVqXEa-VONFd8YeMlUnWjo5e3F9GoBhG_F8_ClhecMjF1rD2_tukJ61DRd5wjCENMfY/pub?gid=0&single=true&output=csv",
            {
                download: true,
                hearder:true,
                complete: (res) => {
                    secretPassKey = res.data[7][1]
                    for (let index = 1; index <= 4; index++) {
                        keys[index] = res.data[index][1]
                    }

                    setAnswer(res.data[8+curr][1]);
                    initializeLab();
                    setInitialized(true);
                }   
            });
    })
    const initializeLab = () => {
        if (secretPassKey!=null){
        const level = getLevel()
        switch (level){
            case curr:
                break;
            case 1:
                router.push('lab');
                break;
            case 2:
                router.push('lab2');
                break
            case 3:
                router.push('lab3');
                break
            case 4:
                router.push('lab2');
                break;
            default:
                localStorage.setItem("level", keys[1]);
                router.push('/lab')
        }}

    }
    const getLevel = () =>{
        const encryptedLevel = localStorage.getItem("level")
        var level = CryptoJS.AES.decrypt(encryptedLevel,secretPassKey).toString()
        level = Number.parseInt(level)
        level = level - 30;
        return level
    }
    const nextLevel = () => {
        const currLevel = getLevel();
        if (currLevel==curr){
            const newLevel = curr+1;
            const newEncryptedLevel = CryptoJS.AES.encrypt(newLevel.toString(), secretPassKey);
            localStorage.setItem("level", newEncryptedLevel);
            initializeLab();
        }
    }
    return [answer, nextLevel, initialized];
}

export default useLab;
