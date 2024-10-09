import React, { useState } from 'react';

const ExpandingButton = ({ initialText, expandedInfo }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`expanding-button cursor-pointer transition-all duration-300 ${isExpanded ? 'expanded' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="initial-text">
        {initialText}
      </div>
      {isExpanded && (
        <div className="expanded-info mt-2 bg-gray-700 p-2 rounded">
          {expandedInfo}
        </div>
      )}
    </div>
  );
};

export default ExpandingButton;