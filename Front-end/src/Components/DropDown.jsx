import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const DropDown = ({
  label = "Select",
  items = [],
  selectedItem = null,
  onChange,
}) => {
  const dropDownRef = useRef();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target))
        setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-60" ref={dropDownRef}>
      <button className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md text-sm text-blacksecondary hover:border-gray-400 transition "
      onClick={()=>setOpen(!open)}>
        <span>{selectedItem || label}</span>
        <FaChevronDown
          className={`text-xs ml-2 ${open ? "rotate-180" : ""} `}
        />
      </button>
      {open && (
        <ul className="absolute w-full mt-2 bg-white border border-gray-200 rounded-md shadow-md z-10">
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                onChange(item);
                setOpen(false);
              }}
              className="px-4 py-2 text-sm text-blacksecondary cursor-pointer hover:bg-gray-100 rounded-md"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
