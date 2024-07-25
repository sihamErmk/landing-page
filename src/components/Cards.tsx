import React from 'react'
import '../index.css'

function Cards() {
  return (
    <div className='Card-Container'>
        <div className='card'>
            <img className= "icon-card" src="" alt="" />
            <h2 className='card-title'>Off-repo storage</h2>
            <p className='card-content'>Local videos are transferred outside of your version control system to avoid storage limits and slow cloning.</p>
        </div>
        <div className='card'>
            <img className= "icon-card" src="" alt="" />
            <h2 className='card-title'>Optimized video streaming</h2>
            <p className='card-content'>Videos are converted and compressed for highly-performant, cost-effective video delivery.</p>
        </div>
        <div className='card'>
            <img className= "icon-card" src="" alt="" />
            <h2 className='card-title'>BYO player, or don’t</h2>
            <p className='card-content'>The built-in video player is customizable and accessible. Or you can bring your own player.</p>
        </div>
        <div className='card'>
            <img className= "icon-card" src="" alt="" />
            <h2 className='card-title'>Adaptive streaming</h2>
            <p className='card-content'>Prevents buffering and poor experiences on slow networks by creating multiple sizes of the video.</p>
        </div>
        <div className='card'>
            <img className= "icon-card" src="" alt="" />
            <h2 className='card-title'>Placeholder posters</h2>
            <p className='card-content'>Prevents layout shift and improves perceived load times with placeholder images</p>
        </div>
        <div className='card'>
            <img className= "icon-card" src="" alt="" />
            <h2 className='card-title'>Timeline hover thumbnails</h2>
            <p className='card-content'>Generates the images needed for previewing other parts of the video while hovering over the video progress bar.</p>
        </div>
       
  </div>
  )
}

export default Cards