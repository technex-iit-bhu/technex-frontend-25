import React, { useState } from 'react';

const GridBackground = ({ children }: { children: React.ReactNode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div 
      className="relative bg-black/50"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/*Cool Grid Background*/}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(220,38,38,0.1)_1px,transparent_1px),linear-gradient(0deg,rgba(220,38,38,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      {/* Glow effect */}
      {isHovering && (
        <div 
          className="absolute pointer-events-none transition-opacity duration-300"
          style={{
            left: mousePosition.x - 100,
            top: mousePosition.y - 100,
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(220,38,38,0.2) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(10px)'
          }}
        />
      )}
      
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GridBackground;