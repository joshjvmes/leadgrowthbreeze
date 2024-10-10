import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ messages, onComplete }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentMessageIndex >= messages.length) {
      onComplete();
      return;
    }

    const currentMessage = messages[currentMessageIndex];

    if (isTyping) {
      if (currentText.length < currentMessage.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentMessage.slice(0, currentText.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        const timeout = setTimeout(() => {
          setCurrentMessageIndex(prevIndex => prevIndex + 1);
          setCurrentText('');
          setIsTyping(true);
        }, 1000);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentMessageIndex, currentText, isTyping, messages, onComplete]);

  return (
    <p className="text-xl mb-10 max-w-2xl mx-auto">
      {currentText}
    </p>
  );
};

export default TypewriterEffect;