import { IoAlertCircleOutline } from "react-icons/io5";
import clsx from "clsx";

const TextareaField = ({
  label,
  required = false,
  value,
  onChange,
  name,
  placeholder,
  error,
  styleInput,
  styleLabel,
  inputStyle,
  readonly = false,
  note,
  rows = 4,
  icon,
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
        {icon && (
          <div className="absolute left-4 top-5 text-gray-400">
            {icon}
          </div>
        )}

        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          readOnly={readonly}
          rows={rows}
          className={clsx(
            "w-full rounded-[8px] border border-[#FFC107] p-4 placeholder:text-sm placeholder:text-[#8B8B8B]/70 placeholder:font-light focus:outline-none focus:ring-2 focus:ring-[#E9B20D]/10 focus:border-[#E9B20D] resize-y",
            styleInput,
            error && "border-red-500",
            icon && "pl-11"
          )}
        />
      </div>

      {error && (
        <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
          <IoAlertCircleOutline /> {error}
        </p>
      )}

      {note && (
        <p className="inter text-[10px] text-[#8B8B8B]/50 mt-1 ml-3">{note}</p>
      )}
    </div>
  );
};

export default TextareaField;
