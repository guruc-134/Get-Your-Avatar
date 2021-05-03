import React from 'react'
import './style.css'
function Info({wantInfo,setWantInfo}){
    const handleChange = () =>
    {
        setWantInfo(false)
    }
    return (
        <div className='info'>
            <h1> Info about the site</h1>
            <div className='content'>
                <p className='question'>What is this site?</p>
                <p className='answer'>This site lets you enter a random name, choose from numerous categories of types of avatars, each value of the input name will generate an avatar</p>
                <p className='question'> How to use it ?</p>
                <p className='answer'>&rarr; enter any string consisting of alphabets, wait for a second...</p>
                <p className='answer'>&rarr;  Select a category from the given types of  avatars</p>
                <p className='answer'>&rarr;  click on "Get Embedded HTML" the image will be copied to your clip board</p>
                <p className='answer'>&rarr;  now you will be having an image tag copied into your clipboard, paste it in your code and the avatar is ready to be used</p>
            </div>
            <button onClick={handleChange}> Lets Go !!</button>
            <p className='author-info'>
                made by : Guru Charan
            </p>
        </div>
    )
}

export default Info
