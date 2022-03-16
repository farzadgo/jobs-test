import { useEffect } from 'react'
import * as Icon from 'react-feather'
import styles from '../styles/Modal.module.css'


const Modal = ({ handleToggle, desc, titl }) => {
  const iconProps = {
    color: '#2A2726',
    size: 44,
    strokeWidth: 1
  }

  useEffect(() => {
    document.body.style.overflowY = 'hidden'
    return () => {
      document.body.style.overflowY = 'scroll'
    }
  }, [])

  return (
    <div className={styles.modal} >
      <button className={styles.mclose} onClick={handleToggle}>
        <Icon.X {...iconProps}/>
      </button>
      <div className={styles.mbody}>
        <h1 className={styles.mtitle}>{titl}</h1>
        <p>{desc}</p>
      </div>

    </div>
  )
}
 
export default Modal