import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Nav from './Nav'
import { sizes } from '../config'


const Layout = ({ children }) => {
  const router = useRouter()
  const path = router.pathname
  const [imgUrl, setImgUrl] = useState('')

  const mainStyle = {
    minHeight: `calc(100vh - ${sizes.navHeight}px)`,
    paddingTop: `${sizes.navHeight}px`,
  }
  const footerStyle = {
    display: 'flex',
    width: '100%',
    height: `${sizes.navHeight}px`,
    background: '#000',
    color: 'white',
    padding: '0 20px',
    alignItems: 'center',
    justifyContent: 'end'
  }
  const headerStyle = {
    position: 'absolute',
    textAlign: 'center',
    padding: '40px',
    backgroundImage: `url(${imgUrl})`,
    backgroundPosition: 'center center',
    height: '460px',
    width: '100%',
    zIndex: '-1',
    fontSize: '1.2em',
  }

  useEffect(() => {
    if (path === '/') { setImgUrl('https://res.cloudinary.com/dd3tumnu6/image/upload/v1647365871/samples/809-1920x460_rsvoql')}
    if (path === '/upload') { setImgUrl('https://res.cloudinary.com/dd3tumnu6/image/upload/v1647365872/samples/591-1920x460_npqnvq') }
  }, [path])
  
  return (
    <>
      <Head>
        <title>PSHOP Jobs Portal</title>
        <meta name="description" content="Site by farzadgo created by Next" />
        <meta name="keywords" content="jobs, pshop, positions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div style={headerStyle} />
      <main style={mainStyle} >
        { children }
      </main>
      <footer style={footerStyle}> Copyright 2022... :D </footer>
    </>
  )
}

export default Layout
