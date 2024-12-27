import { useState, useEffect } from "react";
import { animate } from "framer-motion";

const useWordAnimation = (words, intervalTime = 3000) => {
  const [displayWord, setDisplayWord] = useState(words[0]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextWordIndex = (currentWordIndex + 1) % words.length;
      const nextWord = words[nextWordIndex];

      animate(displayWord.length, 0, {
        duration: 0.5,
        onUpdate: (latest) => {
          setDisplayWord((prev) => prev.slice(0, Math.ceil(latest)));
        },
        onComplete: () => {
          animate(0, nextWord.length, {
            duration: 0.5,
            onUpdate: (latest) => {
              setDisplayWord(nextWord.slice(0, Math.ceil(latest)));
            },
            onComplete: () => {
              setCurrentWordIndex(nextWordIndex);
            },
          });
        },
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [currentWordIndex, displayWord, words, intervalTime]);

  return displayWord;
};

export default useWordAnimation;
