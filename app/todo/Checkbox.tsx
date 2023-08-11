import React, { useState } from 'react';

export default function Checkbox() {
  return (
    <div>
      <div className="container">
        <div className="round">
          <input type="checkbox" checked id="checkbox" />
        </div>
        <label htmlFor="checkbox"></label>
      </div>
    </div>
  );
}