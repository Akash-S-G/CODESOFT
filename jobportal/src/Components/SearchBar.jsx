import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";

export default function SearchBar() {
  const [experience, setExperience] = useState("Select experience");
  const [showDropdown, setShowDropdown] = useState(false);

  const experienceOptions = [
    "Fresher",
    "0-1 Years",
    "1-3 Years",
    "3-5 Years",
    "5+ Years"
  ];

  return (
    <div className="flex justify-center py-6 bg-white top-0 items-center">
      <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2 space-x-4 w-full max-w-5xl">
        {/* Job Keywords */}
        <input
          type="text"
          placeholder="Enter job title / keywords"
          className="flex-1 bg-transparent outline-none text-sm text-gray-800 px-2"
        />

        {/* Experience Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center space-x-1 text-sm text-gray-600 hover:text-blue-600"
          >
            <span>{experience}</span>
            <ChevronDown size={16} />
          </button>
          {showDropdown && (
            <div className="absolute top-10 left-0 w-44 bg-white border shadow-md rounded-md z-50">
              {experienceOptions.map((option, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setExperience(option);
                    setShowDropdown(false);
                  }}
                  className="px-4 py-2 hover:bg-blue-50 text-sm cursor-pointer"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Location input */}
        <input
          type="text"
          placeholder="Enter location"
          className="flex-1 bg-transparent outline-none text-sm text-gray-800 px-2"
        />

        {/* Search Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-2 flex items-center space-x-1 text-sm">
          <Search size={16} />
          <span>Search</span>
        </button>
      </div>
    </div>
  );
}
