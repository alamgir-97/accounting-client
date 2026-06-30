import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const ButtonSwitcher = () => {
  const allButtons = ['Home', 'About', 'Services', 'Blog', 'Contact', 'Login', 'Help'];
  const [activeButton, setActiveButton] = useState(allButtons[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const remainingButtons = allButtons.filter(btn => btn !== activeButton);

  const handleSelect = (btn) => {
    setActiveButton(btn);
    setDropdownOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex items-center gap-2 relative w-full max-w-sm mx-auto mt-6">
      {/* Active Button */}
      <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded text-sm md:text-base">
        {activeButton}
      </button>

      {/* Icon Button (1/2 width of active button) */}
      <button
        onClick={() => setDropdownOpen(prev => !prev)}
        className="w-1/2 px-2 py-2 bg-gray-300 rounded flex items-center justify-center transition-colors hover:bg-gray-400"
      >
        <ChevronDown size={20} />
      </button>

      {/* Dropdown */}
      <div
        ref={dropdownRef}
        className={`absolute top-full mt-2 right-0 bg-white border rounded shadow-md z-20 overflow-hidden transition-all duration-300 ease-in-out ${
          dropdownOpen ? 'max-h-96 opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {remainingButtons.map(btn => (
          <button
            key={btn}
            onClick={() => handleSelect(btn)}
            className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 transition-colors"
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonSwitcher;