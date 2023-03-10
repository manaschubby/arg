import React, { useRef, useState } from 'react';
import useSuccess from '../../hooks/useSuccess';
import SVG from '../ouros/svg';
import axios from 'axios';
const Index = () => {
    const teamRef = useRef();
    const nameRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const submit = (e)=>{
        e.preventDefault();
        if(nameRef.current.value.trim()!=""&&teamRef.current.value.trim()!=""){
            const currentdate = new Date();
            const datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
            setIsLoading(true)
            axios.post("https://sheet.best/api/sheets/329648c2-f897-4c7b-a664-2242f2fbbb78",{
                team:teamRef.current.value.trim(),
                name:nameRef.current.value.trim(),
                digit: successKey,
                timestamp: datetime
            }).catch((reason)=>{
                setIsLoading(false)
                alert("ERROR. Try again. Check console for error description. Please contact dev team if error persists");
                console.log(reason)

            })
            .then((response)=>{
                setIsLoading(false)
                localStorage.setItem("Submitted", "yes")
                alert("Your responses have been sent to us. Thank you - Team ARG");
                initializeSuccess();
            })
        }
    }
    const [successKey, initializeSuccess, paragraph] = useSuccess();
    return (
        <div>
            <div className='background'>
            <div className='love'>Designed with love: <a href='https://www.linkedin.com/in/manas-ashwin-053755224/'>Manas Ashwin</a></div>
                <SVG />
                <div className='center-main'>
                    {!isLoading &&<>
                    <h1 className='level'>Successful Completion. Enter Team Details</h1>
                    <div className='label success'>{paragraph}</div>
                    <input 
                        className='password' 
                        placeholder='Team Name' 
                        ref={teamRef}/>
                    <input 
                        className='password' 
                        placeholder='Leader Name' 
                        ref={nameRef}/>
                    <button className='submit' onClick={submit}>Submit</button> </>
                    }
                </div>
            </div>
        </div>
    );
}

export default Index;
