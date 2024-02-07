import React from 'react'
import AppleImg from "../Images/AppleImg.png"
import GitHubImg from "../Images/GitHubImg.png"
import PlayStoreImg from "../Images/PlayStoreImg.jpg"
import ReactImg from "../Images/ReactImg.jpg"
import Authentication from './Authentication'


const Content = () => {
  return (
    <div style={{margin: "30px"}}>
        <div id="containerOne">
            <p>My Name is, <span id="name">_______</span></p>
            <p>i specialize in as <span id="job">_______</span> as following shown,</p>
            and this is my test submission
        </div>

        <div id="containerTwo">
            <img src={ReactImg} className='iconimg' alt='react' style={{border:"2px solid green", borderRadius:"10px"}}></img>
            <img src={GitHubImg} className='iconimg' alt='GitHubImg' style={{border:"2px solid pink", borderRadius:"10px"}}></img>
            <img src={AppleImg} className='iconimg' alt='AppleImg' style={{border:"2px solid red", borderRadius:"10px"}}></img>
            <img src={PlayStoreImg} className='iconimg' alt='PlayStoreImg' style={{border:"2px solid blue", borderRadius:"10px"}}></img>
        </div>

        <div>
            <Authentication/>
        </div>
    </div>
  )
}

export default Content
