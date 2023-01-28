import React from 'react';
import useLab from '../../hooks/useLab';
import pi1 from '../lab/scientists/1.jpeg'
import pi2 from '../lab/scientists/2.jpeg'
import pi3 from '../lab/scientists/2.jpeg'
import pi4 from '../lab/scientists/3.jpeg';
const Index = () => {
    const [correctAnswer, nextLevel, initialized, prompt, writeups] = useLab(2);
    const submit = (sci) => {
        if (sci==correctAnswer){
            nextLevel("");
            return;
        }else{
            alert("No Babe wrong person entered. Try again love");
        }
    }
    return (
        <div>
            <div className='bg'></div>
            <div className='love'>Designed with love: <a href='https://www.linkedin.com/in/manas-ashwin-053755224/'>Manas Ashwin</a></div>
        <div id="container">
            <div className="steam" id="steam1"> </div>
            <div className="steam" id="steam2"> </div>
            <div className="steam" id="steam3"> </div>
            <div className="steam" id="steam4"> </div>
        </div>
        {initialized?<>
        <div className='lab2-label'>
        {prompt}
   </div>
   <div className='main-lab2'>
            <div className='person p1'>
                <div className='person-header'>
                    <div className='person-image i2' />
                    <div className='person-writeup'>
                
                    {writeups[0]}
                </div></div>
                <button className='submit lab lab2' onClick={(e)=>{
                    e.preventDefault();
                    submit(1)
                }}>TERMINATE</button>
            </div>
            <div className='person p2'>
                <div className='person-header'>
                    <div className='person-image i1' />
                    <div className='person-writeup'>
                
                    {writeups[1]}
                </div></div>
                <button className='submit lab lab2' onClick={(e)=>{
                    e.preventDefault();
                    submit(2)
                }}>TERMINATE</button>
            </div>
            <div className='person p3'>
                <div className='person-header'>
                    <div className='person-image i3' />
                    <div className='person-writeup'>
                
                    {writeups[2]}
                </div></div>
                <button className='submit lab lab2' onClick={(e)=>{
                    e.preventDefault();
                    submit(3)
                }}>TERMINATE</button>
            </div>
            <div className='person p4'>
                <div className='person-header'>
                    <div className='person-image i4' />
                    <div className='person-writeup'>
                
                    {writeups[3]}
                </div></div>
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
