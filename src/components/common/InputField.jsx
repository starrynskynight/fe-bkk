import { useState } from "react";
import {
  IoEyeOff,
  IoEye,
  IoAlertCircleOutline,
} from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import clsx from "clsx";

const InputField = ({
  label,
  required = false,
  type = "text",
  value,
  onChange,
  name,
  placeholder,
  error,
  styleInput,
  styleLabel,
  styleButton,
  inputStyle,
  readonly = false,
  note,
  onRemove,
  showRemove = false,
  icon, // ✅ icon prop baru
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className={clsx("mb-4 relative", inputStyle)}>
      {label && (
        <label
          htmlFor={name}
          className={`block text-lg font-medium text-black mb-2 ${styleLabel}`}
        >
          {label} {required && <span className="text-red-600">*</span>}
        </label>
      )}

      <div className="relative">
        {/* ✅ tampilkan icon jika ada */}
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}

        <input
          type={inputType}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          readOnly={readonly}
          className={clsx(
            "w-full rounded-[8px] border border-[#FFC107] p-4 placeholder:text-sm placeholder:text-[#8B8B8B]/70 placeholder:font-light focus:outline-none focus:ring-2 focus:ring-[#E9B20D]/10 focus:border-[#E9B20D]",
            styleInput,
            error && "border-red-500",
            icon && "pl-11" // ✅ tambahkan padding kiri jika ada icon
          )}
        />

        {/* password toggle */}
        {type === "password" && (
          <button
            type="button"
            className={`absolute right-3 top-2.5 text-gray-500 ${styleButton}`}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <IoEye /> : <IoEyeOff />}
          </button>
        )}

        {/* tombol hapus (remove) */}
        {showRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="absolute right-3 top-2 p-1 rounded-full bg-[#DE1B1B] text-white transform transition-transform hover:scale-105 hover:bg-red-600"
          >
            <RxCross2 size={12} />
          </button>
        )}
      </div>

      {/* pesan error */}
      {error && (
        <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
          <IoAlertCircleOutline /> {error}
        </p>
      )}

      {/* catatan */}
      {note && (
        <p className="inter text-[10px] text-[#8B8B8B]/50 mt-1 ml-3">{note}</p>
      )}
    </div>
  );
};

export default InputField;
