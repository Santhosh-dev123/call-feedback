import React from 'react';
import { Box, Tooltip } from '@mui/material';
import Transcription from './Transcription';

function Model() {
  return (
      <Box sx={{ boxShadow: 8, width: "90%", margin: "1%  2% !important" , padding: 5}}>
       <p>
        The customer said his <span className="highlight">signal was lost this afternoon</span>
        and requested support through a technical visit. He confirmed that he
        <span className="highlight"> made all steps to reset the equipment</span>, but the problem persisted.
        It was suggested to wait a couple of hours to restore the signal in the area, but the customer was impatient.
      </p>
      <div style={{display: "flex"}}>
        <p className="eye-icon"><input type='checkbox'></input> Click to shift to</p>
      </div>
      
        <Transcription />
      </Box>

 
  );
}

export default Model;