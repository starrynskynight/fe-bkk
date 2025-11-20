import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import clsx from "clsx";

const SearchInput = ({
  placeholder = "Cari...",
  value,
  onChange,
  onClear,
  className,
  disabled = false,
  showClear = true,
  size = "md", // sm, md, lg
}) => {
  const handleClear = () => {
    if (onClear) {
      onClear();
    } else if (onChange) {
      onChange({ target: { value: "" } });
    }
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm", 
    lg: "px-5 py-3 text-base"
  };

  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 18
  };

  return (
    <div className={clsx("relative", className)}>
      <div className="relative">
        <IoSearch 
          className={clsx(
            "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",
            disabled && "text-gray-300"
          )}
          size={iconSizes[size]}
        />
        
        <input
          type="text"
          value={value || ""}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={clsx(
            "w-full border border-[#EBF1F6] rounded-[10px] pl-10 pr-10",
            "placeholder:text-gray-400 placeholder:font-light",
            "focus:outline-none focus:ring-2 focus:ring-primary-orange/10 focus:border-primary-orange",
            "transition-all duration-200",
            sizeClasses[size],
            disabled && "bg-gray-50 cursor-not-allowed",
            !disabled && "hover:border-gray-300"
          )}
        />

        {showClear && value && !disabled && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <IoClose size={iconSizes[size]} />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
