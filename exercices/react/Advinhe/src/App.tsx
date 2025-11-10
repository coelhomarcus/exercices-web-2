import { useState, useMemo } from 'react'

import Header from './components/Header/Header'
import Tip from './components/Tip/Tip'
import Guess from './components/Guess/Guess'
import Word from './components/Word/Word'
import UsedLetters from './components/UsedLetters/UsedLetters'

const PossibleWords = ["Marcus", "Vitoria", "Luan"];

const App = () => {

   const response = useMemo(() => {
      return PossibleWords[Math.floor(Math.random() * PossibleWords.length)];
   }, []);

   const maxAttempts = 10;
   const [inputValue, setInputValue] = useState('');
   const [guessedLetters, setGuessedLetters] = useState<number[]>([]);
   const [usedLetters, setUsedLetters] = useState<{ letter: string, correct: boolean }[]>([]);
   const [attempts, setAttempts] = useState(0);

   return (
      <div className='app'>
         <div className='content'>
            <Header
               attempts={attempts}
               maxAttempts={maxAttempts} />

            <Tip />

            <Word
               response={response}
               guessedLetters={guessedLetters} />

            <Guess
               attempts={attempts}
               maxAttempts={maxAttempts}
               inputValue={inputValue}
               usedLetters={usedLetters}
               response={response}
               setUsedLetters={setUsedLetters}
               setGuessedLetters={setGuessedLetters}
               guessedLetters={guessedLetters}
               setAttempts={setAttempts}
               setInputValue={setInputValue}
            />

            <UsedLetters usedLetters={usedLetters} />
         </div>
      </div>
   )
}

export default App
