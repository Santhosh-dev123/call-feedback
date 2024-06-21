import React, { useState } from 'react';
import './Transcription.css';
import openEye from "../assets/eye_open.png";
import openClose from "../assets/eye_close.png";
import { Checkbox } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import EmotionRating from './EmojiRating';
import ChatBox from './ChatBox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Transcription() {
  const [open, setOpen] = useState(false);
  return (
    <>
    <div className="details">
    <div className='transcription-detailed'>
        <div><h5 style={{padding: 0, margin: 0}}>Transcription detailed</h5><small>click to show</small></div>
        <div onClick={() => setOpen(!open)}><img src={open ? openEye : openClose} height={50} width={50} style={{objectFit: "contain"}}></img></div>
        
    </div>
    {open && <ChatBox/>}
  </div>

    <div className="transcription">
      <div className="client-info">
        <div className="emotion">
          <div>
            <p>Client's emotion</p>
            <EmotionRating></EmotionRating>
          </div>
          <div className="user-info">
            <img src="https://via.placeholder.com/50" alt="User" />
            <p>Augusto Coimbra</p>
          </div>
        </div>
        <div className="tips">
          <div>
            <p>Tips from GreAI</p>
            <p>Show confidence; Maybe telling him that you will resolve the issue soon would be good.</p>
          </div>
          <div>
            <Checkbox {...label} icon={<ThumbUpIcon />} checkedIcon={<ThumbUpIcon />} />
            <Checkbox {...label} icon={<ThumbDownIcon />} checkedIcon={<ThumbDownIcon />} />
          </div>
        </div>
      </div>
       
    </div>

    </>
  );
}

export default Transcription;