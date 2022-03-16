import Link from 'next/link'
import styles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={styles.nav} >
      <ul>
        <li><Link href='/'> Cloud Jobs </Link></li>
        <li><Link href='/upload'> Self Jobs </Link></li>
      </ul>
    </nav>
  )
}

export default Nav
