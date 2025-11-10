import styles from './Word.module.css'

interface WordProps {
   response: string;
   guessedLetters: number[];
}

const Word = ({ response, guessedLetters }: WordProps) => {
   return (
      <div className={styles.word}>
         {Array.from(response).map((letter, index) => (
            <div
               key={index}
               className={guessedLetters.includes(index) ? styles.guessed : styles.textTransparent}
            >
               {letter.toUpperCase()}
            </div>
         ))}
      </div>
   )
}

export default Word
