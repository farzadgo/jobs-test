import Link from 'next/link'

const Nav = () => {
  const navStyle = {
    position: 'fixed',
    minWidth: '100%',
    height: '60px',
    padding: '10px',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '5',
    backdropFilter: 'blur(10px)',
    fontSize: '1.4em'
  }
  const navUlStyle = {
    display: 'flex',
    color: '#272727',
    fontWeight: 'bold',
  }
  const navLiStyle = {
    margin: '0 15px'
  }
  
  return (
    <nav style={navStyle}>
      <ul style={navUlStyle}>
        <li style={navLiStyle}>
          <Link href='/'> Cloud Jobs </Link>
        </li>
        <li style={navLiStyle}>
          <Link href='/upload'> Self Jobs </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
