import { useState, useEffect } from 'react';

interface TextTypeProps {
  text: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function TextType({
  text,
  typingSpeed = 75,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = '|',
  className = '',
  style = {}
}: TextTypeProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (charIndex < text[currentTextIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText(prev => prev + text[currentTextIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        // Finished typing current text
        setIsTyping(false);
        timeout = setTimeout(() => {
          // Move to next text
          setCurrentTextIndex((prev) => (prev + 1) % text.length);
          setDisplayedText('');
          setCharIndex(0);
          setIsTyping(true);
        }, pauseDuration);
      }
    }

    return () => clearTimeout(timeout);
  }, [isTyping, charIndex, currentTextIndex, text, typingSpeed, pauseDuration]);

  return (
    <div className={className} style={style}>
      <span>{displayedText}</span>
      {showCursor && (
        <span
          style={{
            animation: 'blink 0.7s infinite',
            marginLeft: '2px'
          }}
        >
          {cursorCharacter}
        </span>
      )}
      <style>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
