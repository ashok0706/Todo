import React, { useState, useEffect } from 'react';
import { FaSearch, FaBriefcase, FaUser } from 'react-icons/fa';

const sampleData = [
  {
    type: 'job',
    title: 'Frontend Developer',
    location: 'New York, NY',
    experienceRequired: '3+ years',
  },
  {
    type: 'job',
    title: 'Backend Developer',
    location: 'Remote',
    experienceRequired: '5+ years',
  },
  {
    type: 'candidate',
    name: 'Mike Johnson',
    skills: ['JavaScript', 'React'],
    experience: '4 years',
  },
  {
    type: 'candidate',
    name: 'Bob Smith',
    skills: ['Node.js', 'MongoDB'],
    experience: '2 years',
  },
  // Add more sample items...
];

const SearchBox = ({ placeholder = 'Search...' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false); // Added state to track focus

  useEffect(() => {
    const filtered = sampleData.filter((item) =>
      item.type === 'job'
        ? item.title.toLowerCase().includes(searchTerm.toLowerCase())
        : item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(searchTerm === '' ? [] : filtered);
  }, [searchTerm]);

  return (
    <div className="relative w-full max-w-lg">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <FaSearch className="w-4 h-4 text-neutral-400" />
      </div>
      <input
        className="w-full pl-10 pr-3 py-2 rounded-md border border-neutral-300 bg-white shadow-sm focus:ring-blue-500 focus:border-blue-500"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsInputFocused(true)} // Set focus state to true when focused
        onBlur={() => setIsInputFocused(false)} // Set focus state to false when focus is lost
      />
      <div className="absolute z-50 w-full bg-white shadow-lg rounded-md mt-1 max-h-60 overflow-auto">
        {filteredData.length > 0
          ? filteredData.map((item, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-3 text-sm text-neutral-700 hover:bg-blue-50 flex items-center"
                onClick={(e) => e.preventDefault()}
              >
                {item.type === 'job' ? (
                  <FaBriefcase className="text-blue-500 mr-2" />
                ) : (
                  <FaUser className="text-green-500 mr-2" />
                )}
                <div>
                  <div className="font-medium">
                    {item.type === 'job' ? item.title : item.name}
                  </div>
                  <div className="text-neutral-500 text-xs">
                    {item.type === 'job'
                      ? `${item.location} · ${item.experienceRequired} experience`
                      : `Skills: ${item.skills.join(', ')} · ${
                          item.experience
                        } experience`}
                  </div>
                </div>
              </a>
            ))
          : isInputFocused &&
            searchTerm !== '' && ( // Only show "No results found" when input is focused and search term is not empty
              <div className="px-4 py-3 text-sm text-neutral-400">
                No results found.
              </div>
            )}
      </div>
    </div>
  );
};

export default SearchBox;
