import React from 'react';
import './AddButton2.css';

const AddButton = ({ onClick }) => (
    <button className="cssbuttons-io-button" onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path>
      </svg>
    </button>
  );

export default AddButton;