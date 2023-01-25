import React from 'react';
import useLab from '../../hooks/useLab';
const Index = () => {
    const [correctAnswer, nextLevel, initialized] = useLab(2);

    const submit = (sci) => {
        if (sci==correctAnswer){
            nextLevel();
            return;
        }else{
            alert("No Babe wrong person entered. Try again love");
        }
    }
    return (
        <div>
            <div className='bg'></div>
        <div id="container">
            <div className="steam" id="steam1"> </div>
            <div className="steam" id="steam2"> </div>
            <div className="steam" id="steam3"> </div>
            <div className="steam" id="steam4"> </div>
        </div>
        {initialized?<>
        <div className='lab2-label'>
        Terminate the leader
   </div>
   <div className='main-lab2'>
            <div className='person'>
                <div className='person-image' />
                <button className='submit lab lab2' onClick={(e)=>{
                    e.preventDefault();
                    submit(1)
                }}>TERMINATE</button>
            </div>
            <div className='person'>
                <div className='person-image' />
                <button className='submit lab lab2' onClick={(e)=>{
                    e.preventDefault();
                    submit(2)
                }}>TERMINATE</button>
            </div>
            <div className='person'>
                <div className='person-image' />
                <button className='submit lab lab2' onClick={(e)=>{
                    e.preventDefault();
                    submit(3)
                }}>TERMINATE</button>
            </div>
            <div className='person'>
                <div className='person-image' />
                <button className='submit lab lab2' onClick={(e)=>{
                    e.preventDefault();
                    submit(4)
                }}>TERMINATE</button>
            </div>
        </div></>:
        <><h1 className='lab-label'>
        Loading Lab settings and directory
   </h1></>}
    </div>
    );
}

export default Index;
