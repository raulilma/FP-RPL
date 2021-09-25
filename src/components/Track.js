import React from "react";

import { FlatButton } from "./Buttons";
import ImgCover from "./ImgCover";
import InfoTextWithTitle from "./InfoTextWithTitle";

export default function Track({ height, imgUrl, title, artistName, albumName, selected, onSelected, onDeselected }) {
  return (
    <div className="track-card">
      <ImgCover height={height} url={imgUrl} />
      <div className="track-info">
        <InfoTextWithTitle title="Title" value={title} />
        <InfoTextWithTitle title="Artist" value={artistName} />
        <InfoTextWithTitle title="Album" value={albumName} />
        <FlatButton className="green-button" value={selected ? "Deselect" : "Select"} onClick={selected ? onDeselected : onSelected} />
      </div>
    </div>
  );
}
