import React from 'react';

const Gif = (props) => {
  const { gif } = props;
  return (
    <div className="gif"
         style={{ backgroundImage: `url(${gif.url})`,
                  height: `${gif.height}px`,
                  width: `${gif.width}px` }}>
    </div>
  )
}

export default Gif;
