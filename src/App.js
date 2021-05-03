import React from 'react'
import {useState,useEffect} from 'react';
import './App.css';
import Info from './components/Info/Info.component';
function App() {
  var [seed,setSeed] = useState('seed');
  var [type,setType] = useState('bottts');
  var [image,setImage] = useState(`https://avatars.dicebear.com/api/${type}/${seed}.svg`)
  var [buttonTxt, setBtnTxt] = useState('Get Embedded HTML')
  var [wantInfo,setWantinfo] = useState(false)
  
  const handleChangeType = (event) =>
  {
    event.preventDefault()
    setType(event.target.value)

  }
  const handleChangeSeed = (event) =>
  {
    event.preventDefault()
    setSeed(event.target.value)
  }

  const copyTocursor = () =>
  {
    var copyText = document.querySelector('.avatar-img-src')
    copyText.select();
    console.log(copyText)
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    setBtnTxt('copied to clipboard')
  }
  const handleInfoChange = (e)=>
  {
    setWantinfo(true)
  }
  useEffect(() =>
  {
    image = `https://avatars.dicebear.com/api/${type}/${seed}.svg`;
    setImage(image)
    setBtnTxt('Get Embedded HTML')
  },[seed,type,setWantinfo])

  return (
    <div  className = 'app'>
        <button className='info-btn' onClick={handleInfoChange}><img src="https://img.icons8.com/emoji/48/000000/information-emoji.png"/></button>
        {
          wantInfo?<Info wantInfo = {wantInfo} setWantInfo={setWantinfo} />:null
        }
      <div className = 'header'>
        <h1>Random Avatar Generator</h1>
      </div>
      <div className='image-displayer'>
          <img className='avatar-img' src ={`https://avatars.dicebear.com/api/${type}/${seed}.svg`} alt='image for this text cannot be generated'/> 
          <input className='avatar-img-src' value={`<img src=${image} alt=${seed}-${type}/>`} readOnly/>
          
      </div>
      <div className='userInput'>
          <span>Your Avatar's name </span>
          <input className='input-element' type='text' placeholder='name' onChange={handleChangeSeed}/>
          <label htmlFor="types"> Choose a type: </label>
          <select className='select input-element'name="types" id="avatar-types" onChange={handleChangeType}>
            <option value="bottts">bottts</option>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="human">human</option>
            <option value="identicon">identicon</option>
            <option value="initials">initials</option>
            <option value="avataaars">avataaars</option>
            <option value="jdenticon">jdenticon</option>
            <option value="gridy">gridy</option>
            <option value="micah">micah</option>
          </select>
      </div>
          <button className='download-btn' onClick={copyTocursor}>
              {buttonTxt}
          </button>

    </div>
  )
}

export default App