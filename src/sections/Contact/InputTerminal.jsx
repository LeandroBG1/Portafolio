import { useState, useEffect, useRef } from 'react';

const InputTerminal = ({ placeholder = '> Escribe aquí', onChange }) => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef();

  // Manejar cursor parpadeante
  useEffect(() => {
    const interval = setInterval(() => {
      if (inputRef.current) {
        inputRef.current.classList.toggle('opacity-0');
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full bg-black text-green-500 font-mono px-4 py-2 border border-green-500"
      onClick={() => document.getElementById('hiddenInput').focus()}
    >
      {/* Línea simulada de terminal */}
      <span>{placeholder} </span>
      <span>{inputValue}</span>
      {isFocused && <span ref={inputRef} className="inline opacity-100">|</span>}
      {/* Input oculto real */}
      <input
        id="hiddenInput"
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          if (onChange) onChange(e.target.value);
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="absolute opacity-0 pointer-events-none"
        autoFocus
      />
    </div>
  );
};

export default InputTerminal;
