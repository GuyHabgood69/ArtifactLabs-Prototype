
import React from 'react';

interface MixedTextProps {
  text: string;
  className?: string;
  serifIndices?: number[];
}

export const MixedText: React.FC<MixedTextProps> = ({ text, className = "", serifIndices = [] }) => {
  return (
    <span className={className}>
      {text.split('').map((char, i) => (
        <span 
          key={i} 
          className={serifIndices.includes(i) ? "mix-serif" : ""}
        >
          {char}
        </span>
      ))}
    </span>
  );
};
