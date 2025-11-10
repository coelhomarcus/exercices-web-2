import TipIcon from '../../assets/tip.svg'
import styles from './Tip.module.css'

const Tip = () => {
   return (
      <div className={styles.tip}>
         <img src={TipIcon} alt="Tip Icon" />
         <div>
            <h2>Dica</h2>
            <p>Biblioteca para criar interfaces Web com Javascript.</p>
         </div>
      </div>
   )
}

export default Tip
