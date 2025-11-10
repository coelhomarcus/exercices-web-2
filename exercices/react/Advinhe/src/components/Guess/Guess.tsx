import React from 'react'
import styles from './Guess.module.css'

interface GuessProps {
   inputValue: string;
   attempts: number;
   maxAttempts: number;
   setInputValue: React.Dispatch<React.SetStateAction<string>>;
   usedLetters: { letter: string, correct: boolean }[];
   response: string;
   setUsedLetters: React.Dispatch<React.SetStateAction<{ letter: string, correct: boolean }[]>>;
   setGuessedLetters: React.Dispatch<React.SetStateAction<number[]>>;
   guessedLetters: number[];
   setAttempts: React.Dispatch<React.SetStateAction<number>>;
}

const Guess = ({ inputValue, attempts, maxAttempts, setInputValue, usedLetters, response, setUsedLetters, setGuessedLetters, guessedLetters, setAttempts }: GuessProps) => {
   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      if (value.length <= 1) {
         setInputValue(value);
      }
   };

   const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
      event.preventDefault();

      if (!inputValue.trim() || attempts >= maxAttempts) return;

      const letter = inputValue.toUpperCase();

      if (usedLetters.some(item => item.letter === letter)) {
         setInputValue('');
         return;
      }

      const indices = Array.from(response).map((char, i) => char.toUpperCase() === letter ? i : -1).filter(i => i !== -1);

      setUsedLetters([...usedLetters, { letter, correct: indices.length > 0 }]);

      if (indices.length > 0) {
         setGuessedLetters([...guessedLetters, ...indices]);
      } else {
         setAttempts(attempts + 1);
      }

      setInputValue('');
   }


   return (
      <div className={styles.guess}>
         <h2>Palpite</h2>
         <div className={styles.inputs}>
            <input
               type="text"
               value={inputValue}
               onChange={handleChange}
               disabled={attempts >= maxAttempts}
            />
            <button
               onClick={handleSubmit}
               disabled={attempts >= maxAttempts}
            >
               Confirmar
            </button>
         </div>
         {attempts >= maxAttempts && (
            <p style={{ color: 'red', marginTop: '10px', fontWeight: 'bold' }}>
               Você atingiu o limite de tentativas!
            </p>
         )}
      </div>
   )
}

export default Guess
