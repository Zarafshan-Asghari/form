import { useState } from "react";

export default function Input({
  label = "Enter your name",
  type = "text",
  name,
  value,
  onChange,
}) {
  const [err, setErr] = useState("");
  const handleErr = () => {
    !value ? setErr(`${name} is required`) : setErr("");
  };

  return (
    <div className="flex flex-col w-full font-karla">
      <label className="mb-2 text-gray-dark md:text-sm text-xs capitalize">
        {label} *
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={handleErr}
        required
        className={`caret-green-medium mb-0.5 border w-full rounded-sm px-4 py-1 focus:outline-none focus:border-green-medium ${
          err ? "border-red" : "border-green-light"
        }`}
      />
      {err && <span className="text-xs text-red">{err}</span>}
    </div>
  );
}
