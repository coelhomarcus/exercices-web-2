import styles from './UsedLetters.module.css'

interface UsedLettersProps {
   usedLetters: { letter: string, correct: boolean }[];
}

const UsedLetters = ({ usedLetters }: UsedLettersProps) => {
   return (
      <>
         {usedLetters.length ? <div className={styles.usedLettersSection}>
            <div style={{
               color: '#9e9e9e7a',
               backgroundColor: '#9e9e9e7a',
               height: 2,
               width: '100%',
               marginBottom: 10,
            }}></div>
            <h2>Letras utilizadas</h2>
            <div className={styles.usedLetters}>
               {usedLetters.map((item, index) => (
                  <span
                     key={index}
                     className={item.correct ? styles.correctLetter : styles.wrongLetter}
                  >
                     {item.letter}
                  </span>
               ))}
            </div>
         </div> : null}
      </>
   )
}

export default UsedLetters
