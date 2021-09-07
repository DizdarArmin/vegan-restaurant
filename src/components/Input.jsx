export default function Input({ htmlProperties, handleChange }) {
  const { label, type, placeholder } = htmlProperties;
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        pattern=".{3,}"
        required
        onChange={(event) => handleChange(event.target.value)}
        type={type}
        placeholder={placeholder}
        className="form-control"
      ></input>
    </div>
  );
}
