import React from 'react';

interface Cardprops {
  url?: string;
  img?: string;
  txt?: string;
  data?: any;
}

const Card = ({ data }: Cardprops) => {
  const { url, img, txt } = data;
  return (
    <>
      <a href={url}>
        <img src={img} />
        <span>{txt}</span>
      </a>
    </>
  );
};

export default Card;
