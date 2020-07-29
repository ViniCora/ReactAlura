import React from 'react';

function FormField({
  name,
  value,
  onChange,
  placeholder,
  maxlenght,
  type,
  label,
}) {
  return (
    <div>
      <label>{label}</label>
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        maxlength={maxlenght}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
}

export default FormField;
