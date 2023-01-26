import React, { useRef } from 'react';
import useLab from '../../hooks/useLab';
import SVG from '../ourous/svg';
const Index = () => {
    const [correctAnswer, nextLevel, initialized, prompt] = useLab(3);
    const passwordRef = useRef();
    const submit = ()=>{
        const enteredPasskey = Number.parseInt(passwordRef.current.value);
        if (enteredPasskey%10000000!=0){
            if(enteredPasskey==correctAnswer){
                nextLevel("8");
                return;
            }
            else{
                alert("Please try again or reduce no. of digits");
                return;
            }
        }
        else{
            if(enteredPasskey==Number(correctAnswer/100)){
                nextLevel("6");
                return;
            }
            else{
                alert("Please try again or reduce no. of digits");
                return;
            }
        }
    }
    return (
            <div className='background-lab'>
                {initialized ? 
                <div className='center-main'>
                    <h1 className='level'>
                        {prompt}
                    </h1>
                    <div className='label'>
                        
                    </div>
                    <input className='password' type="password" placeholder='Password' ref={passwordRef}></input>
                    <button className='submit lab' onClick={submit}>DESTROY</button>
                </div>
            : <div className='center-main'>
                <h1 style={{color:"white"}}>Evaluating lab health</h1>
            </div>}
        </div>
    );
}

export default Index;
