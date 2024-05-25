import React, { useState } from 'react';
import { catData } from '.././Constants';
import { SlArrowDown } from 'react-icons/sl';

const Categories = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
    setHoveredItem(null);
  };

  const handleItemMouseEnter = (item) => {
    setHoveredItem(item);
  };

  return (
    <div className="flex flex-wrap justify-center w-full">
      {catData.map(temp => (
        <div 
          key={temp.text} 
          className="relative p-3 m-4 text-center flex-1 min-w-[150px]"
          onMouseEnter={() => handleMouseEnter(temp.text)}
          onMouseLeave={handleMouseLeave}
        >
          <img src={temp.url} className="w-16 mx-auto mb-1" alt={temp.text} />
          <p 
            className="text-sm font-semibold flex items-center justify-center cursor-pointer mb-1" 
            style={{ fontFamily: 'inherit' }}
          >
            {temp.text} {temp.items && <SlArrowDown />}
          </p>
          {hoveredCategory === temp.text && (
            <div className="absolute top-full left-0 mt-0.5 w-40 bg-white shadow-lg rounded p-2 z-10">
              {/* Dropdown content */}
              <ul className="text-left">
                {temp.items.map((item, index) => (
                  <li 
                    key={index} 
                    className="py-1 px-2 hover:bg-gray-200 relative"
                    onMouseEnter={() => handleItemMouseEnter(item.text)}
                  >
                    {item.text}
                    {hoveredItem === item.text && item.subItems && (
                      <ul className="absolute top-0 left-full mt-0.5 w-40 bg-white shadow-lg rounded p-2 z-10">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex} className="py-1 px-2 hover:bg-gray-200">{subItem}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Categories;
