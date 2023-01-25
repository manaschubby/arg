import React, { useRef } from 'react';
import useLab from '../../hooks/useLab';
import SVG from '../ourous/svg';
const Index = () => {
    const [correctAnswer, nextLevel, initialized] = useLab(3);
    const passwordRef = useRef();
    const submit = ()=>{
        
    }
    return (
            <div className='background-lab'>
                {initialized ? 
                <div className='center-main'>
                    <h1 className='level'>
                        Enter the final destruction code
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
