export default function Button({
  children,
  outerWidth,
  btnwidth,
  handleClick,
}) {
  return (
    <div
      style={{ width: `${outerWidth}`, display: "flex", justifyContent: "end" }}
    >
      <button
        style={{ width: `${btnwidth}` }}
        type="submit"
        onClick={handleClick}
      >
        {children}
      </button>
    </div>
  );
}
