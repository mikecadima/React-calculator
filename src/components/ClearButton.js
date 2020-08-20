import React from 'react';
import './Clearbutton.css';

export const ClearButton = props => (
    <div className="clear-btn" onClick={props.handleClear}>
      {props.children}
    </div>
  );