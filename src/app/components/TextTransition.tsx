'use client'
import { useEffect, useState } from 'react';
import Text from '../types/Text';
import TextTransition from 'react-text-transition';

function TextTransitionOP({texts, font}:Text){ 
  const [currentIndex, setCurrentIndex] = useState(0);
  const interval = 3000
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [texts, interval]);
  
  return(
    <TextTransition delay={3000}>
      <p className={"underline decoration-[#ffb700] transition-color"}>{texts[currentIndex]}</p>
    </TextTransition>
    
  )
}


export default TextTransitionOP