import React from 'react'
import Footer from '../../components/Footer/Footer'
import SearchNavbar from '../../components/SearchNavbar/SearchNavbar'
import MusicApp from '../../assets/music_app.png'
import MusicIcon from '../../assets/music.png'
import  MusicFolder from '../../assets/music_folder.png'
import './Upload.css'

const Upload = () => {
  return (
    <div className='upload_container'>
        <SearchNavbar />
         <div className='upload_content_wrapper'>
            <h3 className='upload_content_text'>Please select your upload type:</h3>
            <div className='upload_content_music'>
                <div className='music_container'>
                    <img src={MusicApp} />
                    <span>Single</span>
                </div>
                <div className='music_container'>
                    <img src={MusicIcon} />
                    <span>EP (Extended Plays)</span>
                </div>
                <div className='music_container'>
                    <img src={MusicFolder} />
                    <span>LP (Long Plays)</span>
                </div>
            </div>
            <button>Next</button>
         </div>
      <Footer />
    </div>
  )
}

export default Upload
