import React, { useState } from "react";

const TagInput = ({ value = [], onChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "," || e.key === "Enter") {
      e.preventDefault();
      const newTag = inputValue.trim().replace(/^#*/, ""); 
      if (newTag && !value.includes(newTag)) {
        onChange([...value, newTag]);
      }
      setInputValue("");
    } else if (e.key === "Backspace" && !inputValue && value.length > 0) {
      onChange(value.slice(0, -1));
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    onChange(value.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="border border-[#D2D2D2]  rounded-lg p-2 flex flex-wrap items-center gap-2">
      {value.map((tag, i) => (
        <span
          key={i}
          className="bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded-md flex items-center gap-1"
        >
          #{tag}
          <button
            type="button"
            className="text-gray-500 hover:text-red-500"
            onClick={() => handleRemoveTag(tag)}
          >
            &times;
          </button>
        </span>
      ))}

      <input
        type="text"
        className="flex-1 outline-none text-sm px-1"
        placeholder={value.length === 0 ? "Masukkan hashtag berita Anda" : ""}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value.replace(/^#/, ""))}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default TagInput;
