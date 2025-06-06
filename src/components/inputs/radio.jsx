import "@/styles/inputs/radio.css";

export default function Radio({
  onChange,
  defaultChecked,
  id,
  name,
  label,
  checked,
}) {
  const handleClick = () => {
    onChange();
    document.getElementById(id).checked = true;
  };
  return (
    <span className="radio" onClick={handleClick}>
      <input
        type="radio"
        defaultChecked={defaultChecked}
        onChange={onChange}
        className="radio-input"
        id={id}
        name={name}
        checked={checked}
      />
      <span className="radio-fake-input">
        <span className="radio-fake-input-inner"></span>
      </span>
      <span className="radio-label">{label}</span>
    </span>
  );
}
