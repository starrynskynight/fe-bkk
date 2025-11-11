import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { IoImageOutline, IoClose } from "react-icons/io5";

const FileInput = ({
  label,
  name,
  required = false,
  accept = "image/*",
  onChange,
  className,
  labelClassName,
  error,
  value,
  showPreview = true, 
  note
}) => {
  const [preview, setPreview] = useState(value || null);

  useEffect(() => {
    if (!value) return setPreview(null);

    if (typeof value === "string") {
      setPreview(
        value.startsWith("http") ? value : `${window.location.origin}${value}`
      );
    } else if (value instanceof File) {
      setPreview(URL.createObjectURL(value));
    }
  }, [value]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    } else {
      setPreview(null);
    }
    onChange && onChange(e);
  };

  const handleRemoveImage = () => {
    setPreview(null);
    const fileInput = document.getElementById(name);
    if (fileInput) fileInput.value = "";
    onChange &&
      onChange({
        target: {
          name,
          value: null,
        },
      });
  };

  return (
    <div className={clsx("mb-4", className)}>
      {label && (
        <label
          htmlFor={name}
          className={clsx(
            "block text-lg font-medium text-black mb-2",
            labelClassName
          )}
        >
          {label} {required && <span className="text-primary-red">*</span>}
        </label>
      )}

      <input
        id={name}
        name={name}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className={clsx(
          "block w-full p-4 text-lg text-black border border-[#FFC107] rounded-[8px] cursor-pointer bg-white",
          "placeholder:text-sm placeholder:text-[#8B8B8B]/70 placeholder:font-light focus:outline-none focus:ring-2 focus:ring-[#E9B20D]/10 focus:border-[#E9B20D]",
          "file:mr-3 file:py-4 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-light file:bg-[#EBF1F6] file:[#8B8B8B]/70 hover:file:opacity-90"
        )}
      />

      {showPreview && preview && (
        <div className="mt-3 w-full flex justify-start">
          <div className="relative group">
            <img
              src={preview}
              alt="Preview"
              className="w-36 h-24 object-cover rounded-lg border border-gray-200 transition-transform duration-200 group-hover:scale-105"
            />
            <button
              type="button"
              onClick={handleRemoveImage}
              className="absolute top-1 right-1 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
            >
              <IoClose size={14} />
            </button>
          </div>
        </div>
      )}

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      {note && (
        <p className="inter text-[10px] text-[#8B8B8B]/50 mt-1 ml-3">{note}</p>
      )}
    </div>
  );
};

export default FileInput;
