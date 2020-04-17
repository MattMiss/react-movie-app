import React from 'react';

const MovPreviewFrame = ({ movID }) => {
    return (
      <div
        style={{
          position: "relative",
          maxWidth: "100%",
          paddingBottom: "56.25%" /* 16:9 */,
          paddingTop: 25,
          height: 0,
          overflow: "hidden"
        }}
      >
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            
          }}
          src={`https://www.imdb.com/video/user/${movID}/imdb/embed?autoplay=false&width=480`}
          frameBorder="0"
          allow="fullscreen"
          
        />
      </div>
    );
  };

  export default MovPreviewFrame;