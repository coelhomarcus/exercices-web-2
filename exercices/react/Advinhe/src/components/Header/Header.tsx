import Logo from '../../assets/logo.png'
import RefreshIcon from '../../assets/refresh.svg'
import styles from './Header.module.css'

interface HeaderProps {
   attempts: number;
   maxAttempts: number;
}

const Header = ({ attempts, maxAttempts }: HeaderProps) => {
   return (
      <>
         <img src={Logo} alt="Logo" />
         <div className={styles.header}>
            <p style={{ color: "grey" }}><span style={{ color: "#E8891C", fontWeight: "bold" }}>{attempts}</span> de {maxAttempts} tentativas</p>
            <img src={RefreshIcon} alt="Refresh Icon" onClick={() => location.reload()} className={styles.reload} />
         </div>
      </>
   )
}

export default Header
