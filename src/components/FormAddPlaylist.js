import React from "react";

export default function FormAddPlaylist(props) {
  return (
    <div style={{ marginRight: "2em" }}>
      <form onSubmit={props.handleOnSubmit} className="card">
        <div className="form-control">
          <label className="label-text" htmlFor="title">
            Judul
          </label>
          <input id="title" className="input-text" type="text" minLength="10" name="title" autoComplete="off" value={props.data.title} onChange={props.handleOnChange} />
        </div>
        <div className="form-control">
          <label className="label-text" htmlFor="description">
            Deskripsi
          </label>
          <textarea id="description" className="input-text" minLength="20" name="description" rows="3" autoComplete="off" value={props.data.description} onChange={props.handleOnChange} />
        </div>
        <a id="button" className="search-button bn3">
          Tambah
        </a>
      </form>
    </div>
  );
}
