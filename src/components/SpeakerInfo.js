import React, { useState } from 'react';

const SpeakerInfo = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 flex justify-center"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div 
        className={`
          w-1/5 min-w-[200px] bg-gradient-to-t from-gray-900 to-gray-800 
          text-white p-3 rounded-t-2xl shadow-lg transition-all duration-300 ease-in-out
          ${isExpanded ? 'h-48' : 'h-16'}
        `}
      >
        <div className="text-center">
          <span className="text-xl">🎤</span>
          {isExpanded && (
            <div className="mt-4 transition-opacity duration-300 ease-in-out opacity-100">
              <h3 className="text-lg font-bold mb-2">Kent Boaz</h3>
              <p className="text-sm mb-1">Decatour, Il</p>
              <p className="text-sm mb-1">Speaking at 7 PM</p>
              <p className="text-sm">Topic: Our Stories disclose in a general way</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpeakerInfo;