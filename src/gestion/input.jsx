import 'bootstrap';

export  default function Input({ placeholder, value, onChange }) {
  return (
    <input
    type="text"
    className="form-control"
    value={value}
    onChange={onChange} // ⚠️ NE PAS mettre onChange() ni oublier e
    placeholder={placeholder}
  />
  );
}