export default function QueryTypeSelector({
  className,
  type,
  name,
  value,
  checked,
  onChange,
  children,
}) {
  return (
    <label
      className={`flex items-center justify-start w-full px-4 py-2 gap-1  rounded-sm cursor-pointer text-xs text-gray-dark  ${className}`}
    >
      <input
        type={type}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="caret-green-medium accent-green-medium focus-within:outline-none border border-green-light rounded-sm px-4 py-2"
      />
      {children || value}
    </label>
  );
}
