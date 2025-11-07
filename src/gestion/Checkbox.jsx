// src/Checkbox.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Checkbox({ id, label, checked, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.checked);
  };

  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleChange}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
