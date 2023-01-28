import React, { useRef } from 'react';
import useLab from '../../hooks/useLab';
import SVG from '../ouros/svg';
const Index = () => {
    const [correctAnswer, nextLevel, initialized, prompt] = useLab(3);
    const passwordRef = useRef();
    const submit = ()=>{
        const enteredPasskey = Number.parseInt(passwordRef.current.value);
        let numberOfDigits = Math.log10(enteredPasskey)+1;
        numberOfDigits = numberOfDigits-(numberOfDigits%1);
        const digit6answer = (correctAnswer/100)-((correctAnswer%100)*0.01)
        console.log(numberOfDigits)
        if (numberOfDigits==8){
            if(enteredPasskey==correctAnswer){
                nextLevel("8");
                return;
            }
            else{
                alert("Please try again or reduce no. of digits");
                console.log("me")
                return;
            }
        }
        else{
            if(enteredPasskey==digit6answer){
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
                <div className='love'>Designed with love: <a href='https://www.linkedin.com/in/manas-ashwin-053755224/'>Manas Ashwin</a></div>
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
