import React from 'react';

const AnimatedName = () => {
  return (
    <div className="my-4">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50" width="200" height="60" >
        
        {/* Stylized name */}
        <text 
          x="100" 
          y="50" 
          style={{ 
            fontFamily: 'Arial, sans-serif',
            fontSize: '32px',
            fontStyle: 'italic',
            fontWeight: 'bold',
            fill: '#3B82F6'
          }}
        >
          vinit
        </text>

        {/* Animated crossing line */}
        <line 
          y1="45" 
          y2="45" 
          stroke="#3B82F6" 
          strokeWidth="2"
        >
          <animate 
            attributeName="x1"
            values="95;95;175;95"
            dur="3.5s"
            repeatCount="indefinite"
          />
          <animate 
            attributeName="x2"
            values="95;175;95;95"
            dur="3.5s"
            repeatCount="indefinite"
          />
        </line>
      </svg>
    </div>
  );
};

export default AnimatedName;