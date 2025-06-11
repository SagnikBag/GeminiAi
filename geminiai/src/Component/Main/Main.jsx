import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import { URL } from '../../config/gemini'

const Main = () => {

const [question,setQuestion] = useState("")
const [result,setResult] = useState(undefined)


const payload ={
     "contents": [
      {
        "parts": [
          {
            "text": question
          }
        ]
      }
    ]
  }

const askQuestion = async()=>{
  let response = await fetch(URL,{
    method:"POST",
    body:JSON.stringify(payload)
 } )
 response = await response.json();

//  console.log(response.candidates[0].content.parts[0].text);
 setResult(response.candidates[0].content.parts[0].text);

 
}



  return (
    <div className='main'>
      <div className='nav'>
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div>
          {result}
        </div>
        <div className="greet">
          <p><span>Hello, Dev</span></p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept: urban planning</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activitise for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Improve the readability of the following</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" value={question} onChange={(event)=>setQuestion(event.target.value)} placeholder='Enter promt here' />
            <div>
              <img src={assets.message_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={askQuestion}  src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini display inaccurate info,including about people,so double check its responses.Your privacy and gemini app</p>
        </div>
      </div>
    </div>

  )
}

export default Main