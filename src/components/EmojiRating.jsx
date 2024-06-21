import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const emojis = ['😡', '😟', '😐', '😊', '😁'];

const EmojiIconButton = styled(IconButton)(({ theme, selected }) => ({
  fontSize: '2rem',
  margin: '0 4px',
  filter: selected ? 'none' : 'blur(2px)',
  transition: 'filter 0.3s',
}));

const EmotionRating = () => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const handleEmojiClick = (index) => {
    setSelectedEmoji(index);
  };

  return (
    <Box className="emotions" display="flex" justifyContent="center">
      {emojis.map((emoji, index) => (
        <EmojiIconButton
          key={index}
          selected={selectedEmoji === index}
          onClick={() => handleEmojiClick(index)}
        >
          {emoji}
        </EmojiIconButton>
      ))}
    </Box>
  );
};

export default EmotionRating;
