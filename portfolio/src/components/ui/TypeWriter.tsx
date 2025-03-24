import { useState, useEffect } from 'react';

interface TypeWriterProps {
  words: string[];
  delay?: number;
}

export function TypeWriter({ words, delay = 100 }: TypeWriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setCurrentText(word.substring(0, currentText.length + 1));
        
        // If word is completely typed
        if (currentText.length === word.length) {
          // Wait a bit before starting to delete
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Deleting
        setCurrentText(word.substring(0, currentText.length - 1));
        
        // If word is completely deleted
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? delay / 2 : delay);

    return () => clearTimeout(timer);
  }, [currentText, currentWordIndex, isDeleting, words, delay]);

  return <span className="text-blue-600 dark:text-blue-400">{currentText}</span>;
}