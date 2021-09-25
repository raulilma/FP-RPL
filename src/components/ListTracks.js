import React from "react";

export default function ListTracks(props) {
  return (
    <div className="card list-tracks">
      <b>List URI</b>
      <ol>
        {props.tracksSelected.map((track) => (
          <li key={track}>{track}</li>
        ))}
      </ol>
    </div>
  );
}
