import React from 'react'
import './Downloads.css'
import download from './download.png'

const Downloads = () => {
  return (
    <div id='kk'>
        <div className="downloaditems">
        <h1>Downloads</h1>
            <h3>
                <a href="/path/to/poster.pdf" download="Poster">
                    Download Poster
                    <img src={download} alt="Download Poster" />
                </a>
            </h3>
            <h3>
                <a href="https://www.sece.ac.in">
                    Download Certificates
                    <img src={download} alt="Download Certificates" />
                </a>
            </h3>
        </div>
    </div>
  )
}

export default Downloads
