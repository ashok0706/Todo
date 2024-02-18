import { useEffect, useRef, useState } from 'react';
import { FaSort } from 'react-icons/fa';

const SortOrder = ({ options, selectedValue, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (toggleRef.current && !toggleRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left   " ref={toggleRef}>
      <button
        type="button"
        className="inline-flex justify-between w-64 rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {options.find((option) => option.value === selectedValue)?.label ||
          'Select Option'}
        <FaSort
          className="absolute right-2 top-3 pointer-events-none text-neutral-500"
          aria-hidden="true"
        />
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            {options.map((option) => (
              <button
                key={option.value}
                className="text-neutral-700 block w-full px-4 py-2 text-sm text-left hover:bg-neutral-200"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SortOrder;
