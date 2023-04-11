import React from "react";

const Carousel = (props) => {
  return (
    <div>
      <button onClick={props.prevImage}>{"<"}</button>
      <button onClick={props.nextImage}>{">"}</button>
    </div>
  );
};

export default Carousel;
