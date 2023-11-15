export default function InputElement({
  children,
  bgColor,
  value,
  onChange,
  max,
  type,
}) {
  return (
    <div className="input-Element" style={{ display: "flex" }}>
      <p>{children}</p>
      <input
        style={{ background: `${bgColor}` }}
        value={value}
        onChange={onChange}
        type={type || "text"}
        max={max}
      ></input>
    </div>
  );
}
