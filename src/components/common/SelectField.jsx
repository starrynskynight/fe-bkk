import { IoAlertCircleOutline } from "react-icons/io5";
import clsx from "clsx";

const SelectField = ({
  label,
  required = false,
  name,
  value,
  onChange,
  options = [],
  placeholder = "Pilih opsi",
  error,
  styleInput,
  styleLabel,
  inputStyle,
  readonly = false,
  note,
}) => {
  return (
    <div className={clsx("mb-4", inputStyle)}>
      {label && (
        <label
          htmlFor={name}
          className={clsx(
            "block text-lg font-medium text-black mb-2",
            styleLabel
          )}
        >
          {label} {required && <span className="text-red-600">*</span>}
        </label>
      )}

      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          disabled={readonly}
          className={clsx(
            "w-full rounded-[8px] border border-[#FFC107] p-4 placeholder:text-sm placeholder:text-[#8B8B8B]/70 placeholder:font-light focus:outline-none focus:ring-2 focus:ring-[#E9B20D]/10 focus:border-[#E9B20D] appearance-none cursor-pointer",
            styleInput,
            error && "border-red-500"
          )}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt, idx) => (
            <option key={idx} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <svg
          className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </div>

      {error && (
        <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
          <IoAlertCircleOutline /> {error}
        </p>
      )}

      {note && (
        <p className="inter text-[10px] text-[#8B8B8B]/50 mt-1">{note}</p>
      )}
    </div>
  );
};

export default SelectField;
