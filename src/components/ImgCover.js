import React from "react";

export default function ImgCover(props) {
  return (
    <img
      alt="songs"
      style={{
        height: props.height - 450,
        width: "auto",
      }}
      src={props.url}
    />
  );
}
